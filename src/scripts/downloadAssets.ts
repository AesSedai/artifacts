import axios from "axios"
import { OpenAPI as OpenAPIConfig } from "../api/artifacts/requests/core/OpenAPI"
import fs from "node:fs"
import path from "node:path"

OpenAPIConfig.BASE = "https://api.artifactsmmo.com"

import { ItemsService, MapSchema, MapsService, MonstersService, ResourcesService } from "../api/artifacts/requests"
import { List } from "ts-toolbelt"

const pageSize = 100

function getBase64(url: string) {
    return axios
        .get(url, {
            responseType: "arraybuffer"
        })
        .then((response) => Buffer.from(response.data, "binary").toString("base64"))
}

type assetTypes = "items" | "monsters" | "maps" | "resources"

type assetMap = {
    items: typeof ItemsService.getAllItemsItemsGet
    monsters: typeof MonstersService.getAllMonstersMonstersGet
    maps: typeof MapsService.getAllMapsMapsGet
    resources: typeof ResourcesService.getAllResourcesResourcesGet
}

type asset<T> = {
    imageMap: Map<string, string>
    urlMap: (code: string) => string
    service: T
    outputDataFile: string
    outputImageFile: string
}

const allAssets: { [k in assetTypes]: asset<assetMap[k]> } = {
    items: {
        imageMap: new Map<string, string>(),
        urlMap: (code: string) => `https://artifactsmmo.com/images/items/${code}.png`,
        service: ItemsService.getAllItemsItemsGet,
        outputDataFile: "./src/assets/items/data.ts",
        outputImageFile: "./src/assets/items/images.ts"
    },
    monsters: {
        imageMap: new Map<string, string>(),
        urlMap: (code: string) => `https://artifactsmmo.com/images/monsters/${code}.png`,
        service: MonstersService.getAllMonstersMonstersGet,
        outputDataFile: "./src/assets/monsters/data.ts",
        outputImageFile: "./src/assets/monsters/images.ts"
    },
    maps: {
        imageMap: new Map<string, string>(),
        urlMap: (code: string) => `https://artifactsmmo.com/images/maps/${code}.png`,
        service: MapsService.getAllMapsMapsGet,
        outputDataFile: "./src/assets/maps/data.ts",
        outputImageFile: "./src/assets/maps/images.ts"
    },
    resources: {
        imageMap: new Map<string, string>(),
        urlMap: (code: string) => `https://artifactsmmo.com/images/resources/${code}.png`,
        service: ResourcesService.getAllResourcesResourcesGet,
        outputDataFile: "./src/assets/resources/data.ts",
        outputImageFile: "./src/assets/resources/images.ts"
    }
}

for (let [key, value] of Object.entries(allAssets)) {
    console.log("Beginning fetch for", key)

    const outputData: { [k in string]: List.UnionOf<Awaited<ReturnType<typeof value.service>>["data"]> } = {}
    const outputImages: { [k in string]: string } = {}

    let page = 1
    const pages = (await value.service({ page: 1, size: pageSize })).pages ?? 1

    while (page <= pages) {
        console.log("fetching page", page)
        const response = await value.service({ page: page, size: pageSize })

        for (let result of response.data) {
            let code = ""
            if ("code" in result) {
                code = result.code
                outputData[code] = result
            } else if ("skin" in result) {
                // maps are special
                code = result.skin
                outputData[`${result.x}:${result.y}`] = result
            } else {
                throw `Unknown code? value: ${value}, keys: ${Object.keys(result)}`
            }

            value.imageMap.set(code, value.urlMap(code))
        }

        page++
    }

    // after collecting, transform the imageMaps from URLs to b64 strings
    for (let [code, url] of value.imageMap.entries()) {
        console.log("fetching image for", code)
        const b64 = await getBase64(url)
        outputImages[code] = `data:image/png;base64,${b64}`
    }

    fs.mkdirSync(path.dirname(value.outputDataFile), { recursive: true })
    fs.mkdirSync(path.dirname(value.outputImageFile), { recursive: true })

    fs.writeFileSync(value.outputDataFile, `export const ${key} = ${JSON.stringify(outputData, null, 2)}`)
    fs.writeFileSync(value.outputImageFile, `export const ${key} = ${JSON.stringify(outputImages, null, 2)}`)
}

// download character images
const characters = ["men1", "men2", "men3", "women1", "women2", "women3"]

const outputImages: { [k in string]: string } = {}
for (let character of characters) {
    console.log("fetching image for", character)
    const b64 = await getBase64(`https://artifactsmmo.com/images/characters/${character}.png`)
    outputImages[character] = `data:image/png;base64,${b64}`
}
fs.mkdirSync(path.dirname("./src/assets/characters/images.ts"), { recursive: true })
fs.writeFileSync(
    "./src/assets/characters/images.ts",
    `export const characters = ${JSON.stringify(outputImages, null, 2)}`
)
