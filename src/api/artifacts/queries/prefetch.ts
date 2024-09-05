// generated with @7nohe/openapi-react-query-codegen@1.6.0 

import { type QueryClient } from "@tanstack/react-query";
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
export const prefetchUseMyCharactersServiceGetAllCharactersLogsMyLogsGet = (queryClient: QueryClient, { page, size }: {
  page?: number;
  size?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseMyCharactersServiceGetAllCharactersLogsMyLogsGetKeyFn({ page, size }), queryFn: () => MyCharactersService.getAllCharactersLogsMyLogsGet({ page, size }) });
/**
* Get My Characters
* List of your characters.
* @returns MyCharactersListSchema Successfully fetched characters.
* @throws ApiError
*/
export const prefetchUseMyCharactersServiceGetMyCharactersMyCharactersGet = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseMyCharactersServiceGetMyCharactersMyCharactersGetKeyFn(), queryFn: () => MyCharactersService.getMyCharactersMyCharactersGet() });
/**
* Get Bank Details
* Fetch bank details.
* @returns BankResponseSchema Successfully fetched bank details.
* @throws ApiError
*/
export const prefetchUseMyAccountServiceGetBankDetailsMyBankGet = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseMyAccountServiceGetBankDetailsMyBankGetKeyFn(), queryFn: () => MyAccountService.getBankDetailsMyBankGet() });
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
export const prefetchUseMyAccountServiceGetBankItemsMyBankItemsGet = (queryClient: QueryClient, { itemCode, page, size }: {
  itemCode?: string;
  page?: number;
  size?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseMyAccountServiceGetBankItemsMyBankItemsGetKeyFn({ itemCode, page, size }), queryFn: () => MyAccountService.getBankItemsMyBankItemsGet({ itemCode, page, size }) });
/**
* Get All Characters
* Fetch characters details.
* @param data The data for the request.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_CharacterSchema_ Successfully fetched characters details.
* @throws ApiError
*/
export const prefetchUseCharactersServiceGetAllCharactersCharactersGet = (queryClient: QueryClient, { page, size }: {
  page?: number;
  size?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseCharactersServiceGetAllCharactersCharactersGetKeyFn({ page, size }), queryFn: () => CharactersService.getAllCharactersCharactersGet({ page, size }) });
/**
* Get Character
* Retrieve the details of a character.
* @param data The data for the request.
* @param data.name The character name.
* @returns CharacterResponseSchema Successfully fetched character.
* @throws ApiError
*/
export const prefetchUseCharactersServiceGetCharacterCharactersNameGet = (queryClient: QueryClient, { name }: {
  name: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseCharactersServiceGetCharacterCharactersNameGetKeyFn({ name }), queryFn: () => CharactersService.getCharacterCharactersNameGet({ name }) });
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
export const prefetchUseCharactersServiceGetCharacterAchievementsCharactersNameAchievementsGet = (queryClient: QueryClient, { completed, name, page, size, type }: {
  completed?: boolean;
  name: string;
  page?: number;
  size?: number;
  type?: "combat_kill" | "combat_drop" | "combat_level" | "gathering" | "crafting" | "recycling" | "task" | "other";
}) => queryClient.prefetchQuery({ queryKey: Common.UseCharactersServiceGetCharacterAchievementsCharactersNameAchievementsGetKeyFn({ completed, name, page, size, type }), queryFn: () => CharactersService.getCharacterAchievementsCharactersNameAchievementsGet({ completed, name, page, size, type }) });
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
export const prefetchUseMapsServiceGetAllMapsMapsGet = (queryClient: QueryClient, { contentCode, contentType, page, size }: {
  contentCode?: string;
  contentType?: "monster" | "resource" | "workshop" | "bank" | "grand_exchange" | "tasks_master";
  page?: number;
  size?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseMapsServiceGetAllMapsMapsGetKeyFn({ contentCode, contentType, page, size }), queryFn: () => MapsService.getAllMapsMapsGet({ contentCode, contentType, page, size }) });
/**
* Get Map
* Retrieve the details of a map.
* @param data The data for the request.
* @param data.x The position x of the map.
* @param data.y The position X of the map.
* @returns MapResponseSchema Successfully fetched map.
* @throws ApiError
*/
export const prefetchUseMapsServiceGetMapMapsXYGet = (queryClient: QueryClient, { x, y }: {
  x: number;
  y: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseMapsServiceGetMapMapsXYGetKeyFn({ x, y }), queryFn: () => MapsService.getMapMapsXYGet({ x, y }) });
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
export const prefetchUseItemsServiceGetAllItemsItemsGet = (queryClient: QueryClient, { craftMaterial, craftSkill, maxLevel, minLevel, name, page, size, type }: {
  craftMaterial?: string;
  craftSkill?: "weaponcrafting" | "gearcrafting" | "jewelrycrafting" | "cooking" | "woodcutting" | "mining";
  maxLevel?: number;
  minLevel?: number;
  name?: string;
  page?: number;
  size?: number;
  type?: "resource" | "consumable" | "body_armor" | "weapon" | "leg_armor" | "helmet" | "boots" | "shield" | "amulet" | "ring" | "artifact";
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseItemsServiceGetAllItemsItemsGetKeyFn({ craftMaterial, craftSkill, maxLevel, minLevel, name, page, size, type }), queryFn: () => ItemsService.getAllItemsItemsGet({ craftMaterial, craftSkill, maxLevel, minLevel, name, page, size, type }) });
/**
* Get Item
* Retrieve the details of a item.
* @param data The data for the request.
* @param data.code The code of the item.
* @returns ItemResponseSchema Successfully fetched item.
* @throws ApiError
*/
export const prefetchUseItemsServiceGetItemItemsCodeGet = (queryClient: QueryClient, { code }: {
  code: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseItemsServiceGetItemItemsCodeGetKeyFn({ code }), queryFn: () => ItemsService.getItemItemsCodeGet({ code }) });
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
export const prefetchUseMonstersServiceGetAllMonstersMonstersGet = (queryClient: QueryClient, { drop, maxLevel, minLevel, page, size }: {
  drop?: string;
  maxLevel?: number;
  minLevel?: number;
  page?: number;
  size?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseMonstersServiceGetAllMonstersMonstersGetKeyFn({ drop, maxLevel, minLevel, page, size }), queryFn: () => MonstersService.getAllMonstersMonstersGet({ drop, maxLevel, minLevel, page, size }) });
/**
* Get Monster
* Retrieve the details of a monster.
* @param data The data for the request.
* @param data.code The code of the monster.
* @returns MonsterResponseSchema Successfully fetched monster.
* @throws ApiError
*/
export const prefetchUseMonstersServiceGetMonsterMonstersCodeGet = (queryClient: QueryClient, { code }: {
  code: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseMonstersServiceGetMonsterMonstersCodeGetKeyFn({ code }), queryFn: () => MonstersService.getMonsterMonstersCodeGet({ code }) });
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
export const prefetchUseResourcesServiceGetAllResourcesResourcesGet = (queryClient: QueryClient, { drop, maxLevel, minLevel, page, size, skill }: {
  drop?: string;
  maxLevel?: number;
  minLevel?: number;
  page?: number;
  size?: number;
  skill?: "woodcutting" | "mining" | "fishing";
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseResourcesServiceGetAllResourcesResourcesGetKeyFn({ drop, maxLevel, minLevel, page, size, skill }), queryFn: () => ResourcesService.getAllResourcesResourcesGet({ drop, maxLevel, minLevel, page, size, skill }) });
/**
* Get Resource
* Retrieve the details of a resource.
* @param data The data for the request.
* @param data.code The code of the resource.
* @returns ResourceResponseSchema Successfully fetched resource.
* @throws ApiError
*/
export const prefetchUseResourcesServiceGetResourceResourcesCodeGet = (queryClient: QueryClient, { code }: {
  code: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseResourcesServiceGetResourceResourcesCodeGetKeyFn({ code }), queryFn: () => ResourcesService.getResourceResourcesCodeGet({ code }) });
/**
* Get All Events
* Fetch events details.
* @param data The data for the request.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_ActiveEventSchema_ Successfully fetched events details.
* @throws ApiError
*/
export const prefetchUseEventsServiceGetAllEventsEventsGet = (queryClient: QueryClient, { page, size }: {
  page?: number;
  size?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseEventsServiceGetAllEventsEventsGetKeyFn({ page, size }), queryFn: () => EventsService.getAllEventsEventsGet({ page, size }) });
/**
* Get All Ge Items
* Fetch Grand Exchange items details.
* @param data The data for the request.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_GEItemSchema_ Fetch Grand Exchange items details.
* @throws ApiError
*/
export const prefetchUseGrandExchangeServiceGetAllGeItemsGeGet = (queryClient: QueryClient, { page, size }: {
  page?: number;
  size?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseGrandExchangeServiceGetAllGeItemsGeGetKeyFn({ page, size }), queryFn: () => GrandExchangeService.getAllGeItemsGeGet({ page, size }) });
/**
* Get Ge Item
* Retrieve the details of a Grand Exchange item.
* @param data The data for the request.
* @param data.code The code of the item.
* @returns GEItemResponseSchema Successfully fetched Grand Exchange item.
* @throws ApiError
*/
export const prefetchUseGrandExchangeServiceGetGeItemGeCodeGet = (queryClient: QueryClient, { code }: {
  code: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseGrandExchangeServiceGetGeItemGeCodeGetKeyFn({ code }), queryFn: () => GrandExchangeService.getGeItemGeCodeGet({ code }) });
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
export const prefetchUseAchievementsServiceGetAllAchievementsAchievementsGet = (queryClient: QueryClient, { page, size, type }: {
  page?: number;
  size?: number;
  type?: "combat_kill" | "combat_drop" | "combat_level" | "gathering" | "crafting" | "recycling" | "task" | "other";
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAchievementsServiceGetAllAchievementsAchievementsGetKeyFn({ page, size, type }), queryFn: () => AchievementsService.getAllAchievementsAchievementsGet({ page, size, type }) });
/**
* Get Achievement
* Retrieve the details of a achievement.
* @param data The data for the request.
* @param data.code The code of the achievement.
* @returns BaseachievementResponseSchema Successfully fetched achievement.
* @throws ApiError
*/
export const prefetchUseAchievementsServiceGetAchievementAchievementsCodeGet = (queryClient: QueryClient, { code }: {
  code: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAchievementsServiceGetAchievementAchievementsCodeGetKeyFn({ code }), queryFn: () => AchievementsService.getAchievementAchievementsCodeGet({ code }) });
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
export const prefetchUseLeaderboardServiceGetLeaderboardLeaderboardGet = (queryClient: QueryClient, { page, size, sort }: {
  page?: number;
  size?: number;
  sort?: "weaponcrafting" | "gearcrafting" | "jewelrycrafting" | "cooking" | "woodcutting" | "mining" | "fishing" | "combat" | "achievements_points" | "gold";
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseLeaderboardServiceGetLeaderboardLeaderboardGetKeyFn({ page, size, sort }), queryFn: () => LeaderboardService.getLeaderboardLeaderboardGet({ page, size, sort }) });
/**
* Get Status
* Return the status of the game server.
* @returns StatusResponseSchema Successful Response
* @throws ApiError
*/
export const prefetchUseDefaultServiceGetStatusGet = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceGetStatusGetKeyFn(), queryFn: () => DefaultService.getStatusGet() });
