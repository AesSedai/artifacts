// generated with @7nohe/openapi-react-query-codegen@1.6.0 

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { AchievementsService, CharactersService, DefaultService, EventsService, GrandExchangeService, ItemsService, LeaderboardService, MapsService, MonstersService, MyAccountService, MyCharactersService, ResourcesService } from "../requests/services.gen";
import * as Common from "./common";
/**
* Get All Characters Logs
* History of the last 100 actions of all your characters.
* @param data The data for the request.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_LogSchema_ Successfully fetched logs.
* @throws ApiError
*/
export const useMyCharactersServiceGetAllCharactersLogsMyLogsGetSuspense = <TData = Common.MyCharactersServiceGetAllCharactersLogsMyLogsGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size }: {
  page?: number;
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseMyCharactersServiceGetAllCharactersLogsMyLogsGetKeyFn({ page, size }, queryKey), queryFn: () => MyCharactersService.getAllCharactersLogsMyLogsGet({ page, size }) as TData, ...options });
/**
* Get My Characters
* List of your characters.
* @returns MyCharactersListSchema Successfully fetched characters.
* @throws ApiError
*/
export const useMyCharactersServiceGetMyCharactersMyCharactersGetSuspense = <TData = Common.MyCharactersServiceGetMyCharactersMyCharactersGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseMyCharactersServiceGetMyCharactersMyCharactersGetKeyFn(queryKey), queryFn: () => MyCharactersService.getMyCharactersMyCharactersGet() as TData, ...options });
/**
* Get Bank Details
* Fetch bank details.
* @returns BankResponseSchema Successfully fetched bank details.
* @throws ApiError
*/
export const useMyAccountServiceGetBankDetailsMyBankGetSuspense = <TData = Common.MyAccountServiceGetBankDetailsMyBankGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseMyAccountServiceGetBankDetailsMyBankGetKeyFn(queryKey), queryFn: () => MyAccountService.getBankDetailsMyBankGet() as TData, ...options });
/**
* Get Bank Items
* Fetch all items in your bank.
* @param data The data for the request.
* @param data.itemCode Item to search in your bank.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_SimpleItemSchema_ Successfully fetched items.
* @throws ApiError
*/
export const useMyAccountServiceGetBankItemsMyBankItemsGetSuspense = <TData = Common.MyAccountServiceGetBankItemsMyBankItemsGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ itemCode, page, size }: {
  itemCode?: string;
  page?: number;
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseMyAccountServiceGetBankItemsMyBankItemsGetKeyFn({ itemCode, page, size }, queryKey), queryFn: () => MyAccountService.getBankItemsMyBankItemsGet({ itemCode, page, size }) as TData, ...options });
/**
* Get All Characters
* Fetch characters details.
* @param data The data for the request.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_CharacterSchema_ Successfully fetched characters details.
* @throws ApiError
*/
export const useCharactersServiceGetAllCharactersCharactersGetSuspense = <TData = Common.CharactersServiceGetAllCharactersCharactersGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size }: {
  page?: number;
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseCharactersServiceGetAllCharactersCharactersGetKeyFn({ page, size }, queryKey), queryFn: () => CharactersService.getAllCharactersCharactersGet({ page, size }) as TData, ...options });
/**
* Get Character
* Retrieve the details of a character.
* @param data The data for the request.
* @param data.name The character name.
* @returns CharacterResponseSchema Successfully fetched character.
* @throws ApiError
*/
export const useCharactersServiceGetCharacterCharactersNameGetSuspense = <TData = Common.CharactersServiceGetCharacterCharactersNameGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ name }: {
  name: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseCharactersServiceGetCharacterCharactersNameGetKeyFn({ name }, queryKey), queryFn: () => CharactersService.getCharacterCharactersNameGet({ name }) as TData, ...options });
/**
* Get Character Achievements
* Retrieve the details of a character.
* @param data The data for the request.
* @param data.name The character name.
* @param data.type Type of achievements.
* @param data.completed Filter by completed achievements.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_AchievementSchema_ Successfully fetched character.
* @throws ApiError
*/
export const useCharactersServiceGetCharacterAchievementsCharactersNameAchievementsGetSuspense = <TData = Common.CharactersServiceGetCharacterAchievementsCharactersNameAchievementsGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ completed, name, page, size, type }: {
  completed?: boolean;
  name: string;
  page?: number;
  size?: number;
  type?: "combat_kill" | "combat_drop" | "combat_level" | "gathering" | "crafting" | "recycling" | "task" | "other";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseCharactersServiceGetCharacterAchievementsCharactersNameAchievementsGetKeyFn({ completed, name, page, size, type }, queryKey), queryFn: () => CharactersService.getCharacterAchievementsCharactersNameAchievementsGet({ completed, name, page, size, type }) as TData, ...options });
/**
* Get All Maps
* Fetch maps details.
* @param data The data for the request.
* @param data.contentType Type of content on the map.
* @param data.contentCode Content code on the map.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_MapSchema_ Successfully fetched maps details.
* @throws ApiError
*/
export const useMapsServiceGetAllMapsMapsGetSuspense = <TData = Common.MapsServiceGetAllMapsMapsGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentCode, contentType, page, size }: {
  contentCode?: string;
  contentType?: "monster" | "resource" | "workshop" | "bank" | "grand_exchange" | "tasks_master";
  page?: number;
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseMapsServiceGetAllMapsMapsGetKeyFn({ contentCode, contentType, page, size }, queryKey), queryFn: () => MapsService.getAllMapsMapsGet({ contentCode, contentType, page, size }) as TData, ...options });
/**
* Get Map
* Retrieve the details of a map.
* @param data The data for the request.
* @param data.x The position x of the map.
* @param data.y The position X of the map.
* @returns MapResponseSchema Successfully fetched map.
* @throws ApiError
*/
export const useMapsServiceGetMapMapsXYGetSuspense = <TData = Common.MapsServiceGetMapMapsXYGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ x, y }: {
  x: number;
  y: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseMapsServiceGetMapMapsXYGetKeyFn({ x, y }, queryKey), queryFn: () => MapsService.getMapMapsXYGet({ x, y }) as TData, ...options });
/**
* Get All Items
* Fetch items details.
* @param data The data for the request.
* @param data.minLevel Minimum level items.
* @param data.maxLevel Maximum level items.
* @param data.name Name of the item.
* @param data.type Type of items.
* @param data.craftSkill Skill to craft items.
* @param data.craftMaterial Item code of items used as material for crafting.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_ItemSchema_ Fetch items details.
* @throws ApiError
*/
export const useItemsServiceGetAllItemsItemsGetSuspense = <TData = Common.ItemsServiceGetAllItemsItemsGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ craftMaterial, craftSkill, maxLevel, minLevel, name, page, size, type }: {
  craftMaterial?: string;
  craftSkill?: "weaponcrafting" | "gearcrafting" | "jewelrycrafting" | "cooking" | "woodcutting" | "mining";
  maxLevel?: number;
  minLevel?: number;
  name?: string;
  page?: number;
  size?: number;
  type?: "resource" | "consumable" | "body_armor" | "weapon" | "leg_armor" | "helmet" | "boots" | "shield" | "amulet" | "ring" | "artifact";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseItemsServiceGetAllItemsItemsGetKeyFn({ craftMaterial, craftSkill, maxLevel, minLevel, name, page, size, type }, queryKey), queryFn: () => ItemsService.getAllItemsItemsGet({ craftMaterial, craftSkill, maxLevel, minLevel, name, page, size, type }) as TData, ...options });
/**
* Get Item
* Retrieve the details of a item.
* @param data The data for the request.
* @param data.code The code of the item.
* @returns ItemResponseSchema Successfully fetched item.
* @throws ApiError
*/
export const useItemsServiceGetItemItemsCodeGetSuspense = <TData = Common.ItemsServiceGetItemItemsCodeGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ code }: {
  code: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseItemsServiceGetItemItemsCodeGetKeyFn({ code }, queryKey), queryFn: () => ItemsService.getItemItemsCodeGet({ code }) as TData, ...options });
/**
* Get All Monsters
* Fetch monsters details.
* @param data The data for the request.
* @param data.minLevel Monster minimum level.
* @param data.maxLevel Monster maximum level.
* @param data.drop Item code of the drop.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_MonsterSchema_ Successfully fetched monsters details.
* @throws ApiError
*/
export const useMonstersServiceGetAllMonstersMonstersGetSuspense = <TData = Common.MonstersServiceGetAllMonstersMonstersGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ drop, maxLevel, minLevel, page, size }: {
  drop?: string;
  maxLevel?: number;
  minLevel?: number;
  page?: number;
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseMonstersServiceGetAllMonstersMonstersGetKeyFn({ drop, maxLevel, minLevel, page, size }, queryKey), queryFn: () => MonstersService.getAllMonstersMonstersGet({ drop, maxLevel, minLevel, page, size }) as TData, ...options });
/**
* Get Monster
* Retrieve the details of a monster.
* @param data The data for the request.
* @param data.code The code of the monster.
* @returns MonsterResponseSchema Successfully fetched monster.
* @throws ApiError
*/
export const useMonstersServiceGetMonsterMonstersCodeGetSuspense = <TData = Common.MonstersServiceGetMonsterMonstersCodeGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ code }: {
  code: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseMonstersServiceGetMonsterMonstersCodeGetKeyFn({ code }, queryKey), queryFn: () => MonstersService.getMonsterMonstersCodeGet({ code }) as TData, ...options });
/**
* Get All Resources
* Fetch resources details.
* @param data The data for the request.
* @param data.minLevel Skill minimum level.
* @param data.maxLevel Skill maximum level.
* @param data.skill The code of the skill.
* @param data.drop Item code of the drop.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_ResourceSchema_ Successfully fetched resources details.
* @throws ApiError
*/
export const useResourcesServiceGetAllResourcesResourcesGetSuspense = <TData = Common.ResourcesServiceGetAllResourcesResourcesGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ drop, maxLevel, minLevel, page, size, skill }: {
  drop?: string;
  maxLevel?: number;
  minLevel?: number;
  page?: number;
  size?: number;
  skill?: "woodcutting" | "mining" | "fishing";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseResourcesServiceGetAllResourcesResourcesGetKeyFn({ drop, maxLevel, minLevel, page, size, skill }, queryKey), queryFn: () => ResourcesService.getAllResourcesResourcesGet({ drop, maxLevel, minLevel, page, size, skill }) as TData, ...options });
/**
* Get Resource
* Retrieve the details of a resource.
* @param data The data for the request.
* @param data.code The code of the resource.
* @returns ResourceResponseSchema Successfully fetched resource.
* @throws ApiError
*/
export const useResourcesServiceGetResourceResourcesCodeGetSuspense = <TData = Common.ResourcesServiceGetResourceResourcesCodeGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ code }: {
  code: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseResourcesServiceGetResourceResourcesCodeGetKeyFn({ code }, queryKey), queryFn: () => ResourcesService.getResourceResourcesCodeGet({ code }) as TData, ...options });
/**
* Get All Events
* Fetch events details.
* @param data The data for the request.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_ActiveEventSchema_ Successfully fetched events details.
* @throws ApiError
*/
export const useEventsServiceGetAllEventsEventsGetSuspense = <TData = Common.EventsServiceGetAllEventsEventsGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size }: {
  page?: number;
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseEventsServiceGetAllEventsEventsGetKeyFn({ page, size }, queryKey), queryFn: () => EventsService.getAllEventsEventsGet({ page, size }) as TData, ...options });
/**
* Get All Ge Items
* Fetch Grand Exchange items details.
* @param data The data for the request.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_GEItemSchema_ Fetch Grand Exchange items details.
* @throws ApiError
*/
export const useGrandExchangeServiceGetAllGeItemsGeGetSuspense = <TData = Common.GrandExchangeServiceGetAllGeItemsGeGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size }: {
  page?: number;
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGrandExchangeServiceGetAllGeItemsGeGetKeyFn({ page, size }, queryKey), queryFn: () => GrandExchangeService.getAllGeItemsGeGet({ page, size }) as TData, ...options });
/**
* Get Ge Item
* Retrieve the details of a Grand Exchange item.
* @param data The data for the request.
* @param data.code The code of the item.
* @returns GEItemResponseSchema Successfully fetched Grand Exchange item.
* @throws ApiError
*/
export const useGrandExchangeServiceGetGeItemGeCodeGetSuspense = <TData = Common.GrandExchangeServiceGetGeItemGeCodeGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ code }: {
  code: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseGrandExchangeServiceGetGeItemGeCodeGetKeyFn({ code }, queryKey), queryFn: () => GrandExchangeService.getGeItemGeCodeGet({ code }) as TData, ...options });
/**
* Get All Achievements
* List of all achievements.
* @param data The data for the request.
* @param data.type Type of achievements.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_BaseAchievementSchema_ Successfully fetched achievements.
* @throws ApiError
*/
export const useAchievementsServiceGetAllAchievementsAchievementsGetSuspense = <TData = Common.AchievementsServiceGetAllAchievementsAchievementsGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size, type }: {
  page?: number;
  size?: number;
  type?: "combat_kill" | "combat_drop" | "combat_level" | "gathering" | "crafting" | "recycling" | "task" | "other";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAchievementsServiceGetAllAchievementsAchievementsGetKeyFn({ page, size, type }, queryKey), queryFn: () => AchievementsService.getAllAchievementsAchievementsGet({ page, size, type }) as TData, ...options });
/**
* Get Achievement
* Retrieve the details of a achievement.
* @param data The data for the request.
* @param data.code The code of the achievement.
* @returns BaseachievementResponseSchema Successfully fetched achievement.
* @throws ApiError
*/
export const useAchievementsServiceGetAchievementAchievementsCodeGetSuspense = <TData = Common.AchievementsServiceGetAchievementAchievementsCodeGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ code }: {
  code: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAchievementsServiceGetAchievementAchievementsCodeGetKeyFn({ code }, queryKey), queryFn: () => AchievementsService.getAchievementAchievementsCodeGet({ code }) as TData, ...options });
/**
* Get Leaderboard
* Fetch leaderboard details.
* @param data The data for the request.
* @param data.sort Default sort by combat total XP.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_CharacterLeaderboardSchema_ Successfully fetched leaderboard.
* @throws ApiError
*/
export const useLeaderboardServiceGetLeaderboardLeaderboardGetSuspense = <TData = Common.LeaderboardServiceGetLeaderboardLeaderboardGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size, sort }: {
  page?: number;
  size?: number;
  sort?: "weaponcrafting" | "gearcrafting" | "jewelrycrafting" | "cooking" | "woodcutting" | "mining" | "fishing" | "combat" | "achievements_points" | "gold";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseLeaderboardServiceGetLeaderboardLeaderboardGetKeyFn({ page, size, sort }, queryKey), queryFn: () => LeaderboardService.getLeaderboardLeaderboardGet({ page, size, sort }) as TData, ...options });
/**
* Get Status
* Return the status of the game server.
* @returns StatusResponseSchema Successful Response
* @throws ApiError
*/
export const useDefaultServiceGetStatusGetSuspense = <TData = Common.DefaultServiceGetStatusGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetStatusGetKeyFn(queryKey), queryFn: () => DefaultService.getStatusGet() as TData, ...options });
