// generated with @7nohe/openapi-react-query-codegen@1.6.0 

import { InfiniteData, useInfiniteQuery, UseInfiniteQueryOptions } from "@tanstack/react-query";
import { AchievementsService, CharactersService, EventsService, GrandExchangeService, ItemsService, LeaderboardService, MapsService, MonstersService, MyAccountService, MyCharactersService, ResourcesService } from "../requests/services.gen";
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
export const useMyCharactersServiceGetAllCharactersLogsMyLogsGetInfinite = <TData = InfiniteData<Common.MyCharactersServiceGetAllCharactersLogsMyLogsGetDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ size }: {
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({ queryKey: Common.UseMyCharactersServiceGetAllCharactersLogsMyLogsGetKeyFn({ size }, queryKey), queryFn: ({ pageParam }) => MyCharactersService.getAllCharactersLogsMyLogsGet({ page: pageParam as number, size }) as TData, initialPageParam: 1, getNextPageParam: response => (response as { nextPage: number }).nextPage, ...options });
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
export const useMyAccountServiceGetBankItemsMyBankItemsGetInfinite = <TData = InfiniteData<Common.MyAccountServiceGetBankItemsMyBankItemsGetDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ itemCode, size }: {
  itemCode?: string;
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({ queryKey: Common.UseMyAccountServiceGetBankItemsMyBankItemsGetKeyFn({ itemCode, size }, queryKey), queryFn: ({ pageParam }) => MyAccountService.getBankItemsMyBankItemsGet({ itemCode, page: pageParam as number, size }) as TData, initialPageParam: 1, getNextPageParam: response => (response as { nextPage: number }).nextPage, ...options });
/**
* Get All Characters
* Fetch characters details.
* @param data The data for the request.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_CharacterSchema_ Successfully fetched characters details.
* @throws ApiError
*/
export const useCharactersServiceGetAllCharactersCharactersGetInfinite = <TData = InfiniteData<Common.CharactersServiceGetAllCharactersCharactersGetDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ size }: {
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({ queryKey: Common.UseCharactersServiceGetAllCharactersCharactersGetKeyFn({ size }, queryKey), queryFn: ({ pageParam }) => CharactersService.getAllCharactersCharactersGet({ page: pageParam as number, size }) as TData, initialPageParam: 1, getNextPageParam: response => (response as { nextPage: number }).nextPage, ...options });
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
export const useCharactersServiceGetCharacterAchievementsCharactersNameAchievementsGetInfinite = <TData = InfiniteData<Common.CharactersServiceGetCharacterAchievementsCharactersNameAchievementsGetDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ completed, name, size, type }: {
  completed?: boolean;
  name: string;
  size?: number;
  type?: "combat_kill" | "combat_drop" | "combat_level" | "gathering" | "crafting" | "recycling" | "task" | "other";
}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({ queryKey: Common.UseCharactersServiceGetCharacterAchievementsCharactersNameAchievementsGetKeyFn({ completed, name, size, type }, queryKey), queryFn: ({ pageParam }) => CharactersService.getCharacterAchievementsCharactersNameAchievementsGet({ completed, name, page: pageParam as number, size, type }) as TData, initialPageParam: 1, getNextPageParam: response => (response as { nextPage: number }).nextPage, ...options });
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
export const useMapsServiceGetAllMapsMapsGetInfinite = <TData = InfiniteData<Common.MapsServiceGetAllMapsMapsGetDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentCode, contentType, size }: {
  contentCode?: string;
  contentType?: "monster" | "resource" | "workshop" | "bank" | "grand_exchange" | "tasks_master";
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({ queryKey: Common.UseMapsServiceGetAllMapsMapsGetKeyFn({ contentCode, contentType, size }, queryKey), queryFn: ({ pageParam }) => MapsService.getAllMapsMapsGet({ contentCode, contentType, page: pageParam as number, size }) as TData, initialPageParam: 1, getNextPageParam: response => (response as { nextPage: number }).nextPage, ...options });
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
export const useItemsServiceGetAllItemsItemsGetInfinite = <TData = InfiniteData<Common.ItemsServiceGetAllItemsItemsGetDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ craftMaterial, craftSkill, maxLevel, minLevel, name, size, type }: {
  craftMaterial?: string;
  craftSkill?: "weaponcrafting" | "gearcrafting" | "jewelrycrafting" | "cooking" | "woodcutting" | "mining";
  maxLevel?: number;
  minLevel?: number;
  name?: string;
  size?: number;
  type?: "resource" | "consumable" | "body_armor" | "weapon" | "leg_armor" | "helmet" | "boots" | "shield" | "amulet" | "ring" | "artifact";
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({ queryKey: Common.UseItemsServiceGetAllItemsItemsGetKeyFn({ craftMaterial, craftSkill, maxLevel, minLevel, name, size, type }, queryKey), queryFn: ({ pageParam }) => ItemsService.getAllItemsItemsGet({ craftMaterial, craftSkill, maxLevel, minLevel, name, page: pageParam as number, size, type }) as TData, initialPageParam: 1, getNextPageParam: response => (response as { nextPage: number }).nextPage, ...options });
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
export const useMonstersServiceGetAllMonstersMonstersGetInfinite = <TData = InfiniteData<Common.MonstersServiceGetAllMonstersMonstersGetDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ drop, maxLevel, minLevel, size }: {
  drop?: string;
  maxLevel?: number;
  minLevel?: number;
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({ queryKey: Common.UseMonstersServiceGetAllMonstersMonstersGetKeyFn({ drop, maxLevel, minLevel, size }, queryKey), queryFn: ({ pageParam }) => MonstersService.getAllMonstersMonstersGet({ drop, maxLevel, minLevel, page: pageParam as number, size }) as TData, initialPageParam: 1, getNextPageParam: response => (response as { nextPage: number }).nextPage, ...options });
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
export const useResourcesServiceGetAllResourcesResourcesGetInfinite = <TData = InfiniteData<Common.ResourcesServiceGetAllResourcesResourcesGetDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ drop, maxLevel, minLevel, size, skill }: {
  drop?: string;
  maxLevel?: number;
  minLevel?: number;
  size?: number;
  skill?: "woodcutting" | "mining" | "fishing";
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({ queryKey: Common.UseResourcesServiceGetAllResourcesResourcesGetKeyFn({ drop, maxLevel, minLevel, size, skill }, queryKey), queryFn: ({ pageParam }) => ResourcesService.getAllResourcesResourcesGet({ drop, maxLevel, minLevel, page: pageParam as number, size, skill }) as TData, initialPageParam: 1, getNextPageParam: response => (response as { nextPage: number }).nextPage, ...options });
/**
* Get All Events
* Fetch events details.
* @param data The data for the request.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_ActiveEventSchema_ Successfully fetched events details.
* @throws ApiError
*/
export const useEventsServiceGetAllEventsEventsGetInfinite = <TData = InfiniteData<Common.EventsServiceGetAllEventsEventsGetDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ size }: {
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({ queryKey: Common.UseEventsServiceGetAllEventsEventsGetKeyFn({ size }, queryKey), queryFn: ({ pageParam }) => EventsService.getAllEventsEventsGet({ page: pageParam as number, size }) as TData, initialPageParam: 1, getNextPageParam: response => (response as { nextPage: number }).nextPage, ...options });
/**
* Get All Ge Items
* Fetch Grand Exchange items details.
* @param data The data for the request.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_GEItemSchema_ Fetch Grand Exchange items details.
* @throws ApiError
*/
export const useGrandExchangeServiceGetAllGeItemsGeGetInfinite = <TData = InfiniteData<Common.GrandExchangeServiceGetAllGeItemsGeGetDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ size }: {
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({ queryKey: Common.UseGrandExchangeServiceGetAllGeItemsGeGetKeyFn({ size }, queryKey), queryFn: ({ pageParam }) => GrandExchangeService.getAllGeItemsGeGet({ page: pageParam as number, size }) as TData, initialPageParam: 1, getNextPageParam: response => (response as { nextPage: number }).nextPage, ...options });
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
export const useAchievementsServiceGetAllAchievementsAchievementsGetInfinite = <TData = InfiniteData<Common.AchievementsServiceGetAllAchievementsAchievementsGetDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ size, type }: {
  size?: number;
  type?: "combat_kill" | "combat_drop" | "combat_level" | "gathering" | "crafting" | "recycling" | "task" | "other";
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({ queryKey: Common.UseAchievementsServiceGetAllAchievementsAchievementsGetKeyFn({ size, type }, queryKey), queryFn: ({ pageParam }) => AchievementsService.getAllAchievementsAchievementsGet({ page: pageParam as number, size, type }) as TData, initialPageParam: 1, getNextPageParam: response => (response as { nextPage: number }).nextPage, ...options });
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
export const useLeaderboardServiceGetLeaderboardLeaderboardGetInfinite = <TData = InfiniteData<Common.LeaderboardServiceGetLeaderboardLeaderboardGetDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ size, sort }: {
  size?: number;
  sort?: "weaponcrafting" | "gearcrafting" | "jewelrycrafting" | "cooking" | "woodcutting" | "mining" | "fishing" | "combat" | "achievements_points" | "gold";
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({ queryKey: Common.UseLeaderboardServiceGetLeaderboardLeaderboardGetKeyFn({ size, sort }, queryKey), queryFn: ({ pageParam }) => LeaderboardService.getLeaderboardLeaderboardGet({ page: pageParam as number, size, sort }) as TData, initialPageParam: 1, getNextPageParam: response => (response as { nextPage: number }).nextPage, ...options });
