// generated with @7nohe/openapi-react-query-codegen@1.6.0 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { AccountsService, AchievementsService, CharactersService, DefaultService, EventsService, GrandExchangeService, ItemsService, LeaderboardService, MapsService, MonstersService, MyAccountService, MyCharactersService, ResourcesService, TokenService } from "../requests/services.gen";
import { AddAccountSchema, AddCharacterSchema, ChangePassword, CraftingSchema, DeleteCharacterSchema, DepositWithdrawGoldSchema, DestinationSchema, EquipSchema, GETransactionItemSchema, RecyclingSchema, SimpleItemSchema, UnequipSchema } from "../requests/types.gen";
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
export const useMyCharactersServiceGetAllCharactersLogsMyLogsGet = <TData = Common.MyCharactersServiceGetAllCharactersLogsMyLogsGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size }: {
  page?: number;
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMyCharactersServiceGetAllCharactersLogsMyLogsGetKeyFn({ page, size }, queryKey), queryFn: () => MyCharactersService.getAllCharactersLogsMyLogsGet({ page, size }) as TData, ...options });
/**
* Get My Characters
* List of your characters.
* @returns MyCharactersListSchema Successfully fetched characters.
* @throws ApiError
*/
export const useMyCharactersServiceGetMyCharactersMyCharactersGet = <TData = Common.MyCharactersServiceGetMyCharactersMyCharactersGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMyCharactersServiceGetMyCharactersMyCharactersGetKeyFn(queryKey), queryFn: () => MyCharactersService.getMyCharactersMyCharactersGet() as TData, ...options });
/**
* Get Bank Details
* Fetch bank details.
* @returns BankResponseSchema Successfully fetched bank details.
* @throws ApiError
*/
export const useMyAccountServiceGetBankDetailsMyBankGet = <TData = Common.MyAccountServiceGetBankDetailsMyBankGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMyAccountServiceGetBankDetailsMyBankGetKeyFn(queryKey), queryFn: () => MyAccountService.getBankDetailsMyBankGet() as TData, ...options });
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
export const useMyAccountServiceGetBankItemsMyBankItemsGet = <TData = Common.MyAccountServiceGetBankItemsMyBankItemsGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ itemCode, page, size }: {
  itemCode?: string;
  page?: number;
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMyAccountServiceGetBankItemsMyBankItemsGetKeyFn({ itemCode, page, size }, queryKey), queryFn: () => MyAccountService.getBankItemsMyBankItemsGet({ itemCode, page, size }) as TData, ...options });
/**
* Get All Characters
* Fetch characters details.
* @param data The data for the request.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_CharacterSchema_ Successfully fetched characters details.
* @throws ApiError
*/
export const useCharactersServiceGetAllCharactersCharactersGet = <TData = Common.CharactersServiceGetAllCharactersCharactersGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size }: {
  page?: number;
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseCharactersServiceGetAllCharactersCharactersGetKeyFn({ page, size }, queryKey), queryFn: () => CharactersService.getAllCharactersCharactersGet({ page, size }) as TData, ...options });
/**
* Get Character
* Retrieve the details of a character.
* @param data The data for the request.
* @param data.name The character name.
* @returns CharacterResponseSchema Successfully fetched character.
* @throws ApiError
*/
export const useCharactersServiceGetCharacterCharactersNameGet = <TData = Common.CharactersServiceGetCharacterCharactersNameGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ name }: {
  name: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseCharactersServiceGetCharacterCharactersNameGetKeyFn({ name }, queryKey), queryFn: () => CharactersService.getCharacterCharactersNameGet({ name }) as TData, ...options });
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
export const useCharactersServiceGetCharacterAchievementsCharactersNameAchievementsGet = <TData = Common.CharactersServiceGetCharacterAchievementsCharactersNameAchievementsGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ completed, name, page, size, type }: {
  completed?: boolean;
  name: string;
  page?: number;
  size?: number;
  type?: "combat_kill" | "combat_drop" | "combat_level" | "gathering" | "crafting" | "recycling" | "task" | "other";
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseCharactersServiceGetCharacterAchievementsCharactersNameAchievementsGetKeyFn({ completed, name, page, size, type }, queryKey), queryFn: () => CharactersService.getCharacterAchievementsCharactersNameAchievementsGet({ completed, name, page, size, type }) as TData, ...options });
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
export const useMapsServiceGetAllMapsMapsGet = <TData = Common.MapsServiceGetAllMapsMapsGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ contentCode, contentType, page, size }: {
  contentCode?: string;
  contentType?: "monster" | "resource" | "workshop" | "bank" | "grand_exchange" | "tasks_master";
  page?: number;
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMapsServiceGetAllMapsMapsGetKeyFn({ contentCode, contentType, page, size }, queryKey), queryFn: () => MapsService.getAllMapsMapsGet({ contentCode, contentType, page, size }) as TData, ...options });
/**
* Get Map
* Retrieve the details of a map.
* @param data The data for the request.
* @param data.x The position x of the map.
* @param data.y The position X of the map.
* @returns MapResponseSchema Successfully fetched map.
* @throws ApiError
*/
export const useMapsServiceGetMapMapsXYGet = <TData = Common.MapsServiceGetMapMapsXYGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ x, y }: {
  x: number;
  y: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMapsServiceGetMapMapsXYGetKeyFn({ x, y }, queryKey), queryFn: () => MapsService.getMapMapsXYGet({ x, y }) as TData, ...options });
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
export const useItemsServiceGetAllItemsItemsGet = <TData = Common.ItemsServiceGetAllItemsItemsGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ craftMaterial, craftSkill, maxLevel, minLevel, name, page, size, type }: {
  craftMaterial?: string;
  craftSkill?: "weaponcrafting" | "gearcrafting" | "jewelrycrafting" | "cooking" | "woodcutting" | "mining";
  maxLevel?: number;
  minLevel?: number;
  name?: string;
  page?: number;
  size?: number;
  type?: "resource" | "consumable" | "body_armor" | "weapon" | "leg_armor" | "helmet" | "boots" | "shield" | "amulet" | "ring" | "artifact";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseItemsServiceGetAllItemsItemsGetKeyFn({ craftMaterial, craftSkill, maxLevel, minLevel, name, page, size, type }, queryKey), queryFn: () => ItemsService.getAllItemsItemsGet({ craftMaterial, craftSkill, maxLevel, minLevel, name, page, size, type }) as TData, ...options });
/**
* Get Item
* Retrieve the details of a item.
* @param data The data for the request.
* @param data.code The code of the item.
* @returns ItemResponseSchema Successfully fetched item.
* @throws ApiError
*/
export const useItemsServiceGetItemItemsCodeGet = <TData = Common.ItemsServiceGetItemItemsCodeGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ code }: {
  code: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseItemsServiceGetItemItemsCodeGetKeyFn({ code }, queryKey), queryFn: () => ItemsService.getItemItemsCodeGet({ code }) as TData, ...options });
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
export const useMonstersServiceGetAllMonstersMonstersGet = <TData = Common.MonstersServiceGetAllMonstersMonstersGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ drop, maxLevel, minLevel, page, size }: {
  drop?: string;
  maxLevel?: number;
  minLevel?: number;
  page?: number;
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMonstersServiceGetAllMonstersMonstersGetKeyFn({ drop, maxLevel, minLevel, page, size }, queryKey), queryFn: () => MonstersService.getAllMonstersMonstersGet({ drop, maxLevel, minLevel, page, size }) as TData, ...options });
/**
* Get Monster
* Retrieve the details of a monster.
* @param data The data for the request.
* @param data.code The code of the monster.
* @returns MonsterResponseSchema Successfully fetched monster.
* @throws ApiError
*/
export const useMonstersServiceGetMonsterMonstersCodeGet = <TData = Common.MonstersServiceGetMonsterMonstersCodeGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ code }: {
  code: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMonstersServiceGetMonsterMonstersCodeGetKeyFn({ code }, queryKey), queryFn: () => MonstersService.getMonsterMonstersCodeGet({ code }) as TData, ...options });
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
export const useResourcesServiceGetAllResourcesResourcesGet = <TData = Common.ResourcesServiceGetAllResourcesResourcesGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ drop, maxLevel, minLevel, page, size, skill }: {
  drop?: string;
  maxLevel?: number;
  minLevel?: number;
  page?: number;
  size?: number;
  skill?: "woodcutting" | "mining" | "fishing";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseResourcesServiceGetAllResourcesResourcesGetKeyFn({ drop, maxLevel, minLevel, page, size, skill }, queryKey), queryFn: () => ResourcesService.getAllResourcesResourcesGet({ drop, maxLevel, minLevel, page, size, skill }) as TData, ...options });
/**
* Get Resource
* Retrieve the details of a resource.
* @param data The data for the request.
* @param data.code The code of the resource.
* @returns ResourceResponseSchema Successfully fetched resource.
* @throws ApiError
*/
export const useResourcesServiceGetResourceResourcesCodeGet = <TData = Common.ResourcesServiceGetResourceResourcesCodeGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ code }: {
  code: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseResourcesServiceGetResourceResourcesCodeGetKeyFn({ code }, queryKey), queryFn: () => ResourcesService.getResourceResourcesCodeGet({ code }) as TData, ...options });
/**
* Get All Events
* Fetch events details.
* @param data The data for the request.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_ActiveEventSchema_ Successfully fetched events details.
* @throws ApiError
*/
export const useEventsServiceGetAllEventsEventsGet = <TData = Common.EventsServiceGetAllEventsEventsGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size }: {
  page?: number;
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseEventsServiceGetAllEventsEventsGetKeyFn({ page, size }, queryKey), queryFn: () => EventsService.getAllEventsEventsGet({ page, size }) as TData, ...options });
/**
* Get All Ge Items
* Fetch Grand Exchange items details.
* @param data The data for the request.
* @param data.page Page number
* @param data.size Page size
* @returns DataPage_GEItemSchema_ Fetch Grand Exchange items details.
* @throws ApiError
*/
export const useGrandExchangeServiceGetAllGeItemsGeGet = <TData = Common.GrandExchangeServiceGetAllGeItemsGeGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size }: {
  page?: number;
  size?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGrandExchangeServiceGetAllGeItemsGeGetKeyFn({ page, size }, queryKey), queryFn: () => GrandExchangeService.getAllGeItemsGeGet({ page, size }) as TData, ...options });
/**
* Get Ge Item
* Retrieve the details of a Grand Exchange item.
* @param data The data for the request.
* @param data.code The code of the item.
* @returns GEItemResponseSchema Successfully fetched Grand Exchange item.
* @throws ApiError
*/
export const useGrandExchangeServiceGetGeItemGeCodeGet = <TData = Common.GrandExchangeServiceGetGeItemGeCodeGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ code }: {
  code: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseGrandExchangeServiceGetGeItemGeCodeGetKeyFn({ code }, queryKey), queryFn: () => GrandExchangeService.getGeItemGeCodeGet({ code }) as TData, ...options });
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
export const useAchievementsServiceGetAllAchievementsAchievementsGet = <TData = Common.AchievementsServiceGetAllAchievementsAchievementsGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size, type }: {
  page?: number;
  size?: number;
  type?: "combat_kill" | "combat_drop" | "combat_level" | "gathering" | "crafting" | "recycling" | "task" | "other";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAchievementsServiceGetAllAchievementsAchievementsGetKeyFn({ page, size, type }, queryKey), queryFn: () => AchievementsService.getAllAchievementsAchievementsGet({ page, size, type }) as TData, ...options });
/**
* Get Achievement
* Retrieve the details of a achievement.
* @param data The data for the request.
* @param data.code The code of the achievement.
* @returns BaseachievementResponseSchema Successfully fetched achievement.
* @throws ApiError
*/
export const useAchievementsServiceGetAchievementAchievementsCodeGet = <TData = Common.AchievementsServiceGetAchievementAchievementsCodeGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ code }: {
  code: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAchievementsServiceGetAchievementAchievementsCodeGetKeyFn({ code }, queryKey), queryFn: () => AchievementsService.getAchievementAchievementsCodeGet({ code }) as TData, ...options });
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
export const useLeaderboardServiceGetLeaderboardLeaderboardGet = <TData = Common.LeaderboardServiceGetLeaderboardLeaderboardGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, size, sort }: {
  page?: number;
  size?: number;
  sort?: "weaponcrafting" | "gearcrafting" | "jewelrycrafting" | "cooking" | "woodcutting" | "mining" | "fishing" | "combat" | "achievements_points" | "gold";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseLeaderboardServiceGetLeaderboardLeaderboardGetKeyFn({ page, size, sort }, queryKey), queryFn: () => LeaderboardService.getLeaderboardLeaderboardGet({ page, size, sort }) as TData, ...options });
/**
* Get Status
* Return the status of the game server.
* @returns StatusResponseSchema Successful Response
* @throws ApiError
*/
export const useDefaultServiceGetStatusGet = <TData = Common.DefaultServiceGetStatusGetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetStatusGetKeyFn(queryKey), queryFn: () => DefaultService.getStatusGet() as TData, ...options });
/**
* Action Move
* Moves a character on the map using the map's X and Y position.
* @param data The data for the request.
* @param data.name Name of your character.
* @param data.requestBody
* @returns CharacterMovementResponseSchema The character has moved successfully.
* @throws ApiError
*/
export const useMyCharactersServiceActionMoveMyNameActionMovePost = <TData = Common.MyCharactersServiceActionMoveMyNameActionMovePostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
  requestBody: DestinationSchema;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
  requestBody: DestinationSchema;
}, TContext>({ mutationFn: ({ name, requestBody }) => MyCharactersService.actionMoveMyNameActionMovePost({ name, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Action Equip Item
* Equip an item on your character.
* @param data The data for the request.
* @param data.name Name of your character.
* @param data.requestBody
* @returns EquipmentResponseSchema The item has been successfully equipped on your character.
* @throws ApiError
*/
export const useMyCharactersServiceActionEquipItemMyNameActionEquipPost = <TData = Common.MyCharactersServiceActionEquipItemMyNameActionEquipPostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
  requestBody: EquipSchema;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
  requestBody: EquipSchema;
}, TContext>({ mutationFn: ({ name, requestBody }) => MyCharactersService.actionEquipItemMyNameActionEquipPost({ name, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Action Unequip Item
* Unequip an item on your character.
* @param data The data for the request.
* @param data.name Name of your character.
* @param data.requestBody
* @returns EquipmentResponseSchema The item has been successfully unequipped and added in his inventory.
* @throws ApiError
*/
export const useMyCharactersServiceActionUnequipItemMyNameActionUnequipPost = <TData = Common.MyCharactersServiceActionUnequipItemMyNameActionUnequipPostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
  requestBody: UnequipSchema;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
  requestBody: UnequipSchema;
}, TContext>({ mutationFn: ({ name, requestBody }) => MyCharactersService.actionUnequipItemMyNameActionUnequipPost({ name, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Action Fight
* Start a fight against a monster on the character's map.
* @param data The data for the request.
* @param data.name Name of your character.
* @returns CharacterFightResponseSchema The fight ended successfully.
* @throws ApiError
*/
export const useMyCharactersServiceActionFightMyNameActionFightPost = <TData = Common.MyCharactersServiceActionFightMyNameActionFightPostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
}, TContext>({ mutationFn: ({ name }) => MyCharactersService.actionFightMyNameActionFightPost({ name }) as unknown as Promise<TData>, ...options });
/**
* Action Gathering
* Harvest a resource on the character's map.
* @param data The data for the request.
* @param data.name Name of your character.
* @returns SkillResponseSchema The resource has been successfully gathered.
* @throws ApiError
*/
export const useMyCharactersServiceActionGatheringMyNameActionGatheringPost = <TData = Common.MyCharactersServiceActionGatheringMyNameActionGatheringPostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
}, TContext>({ mutationFn: ({ name }) => MyCharactersService.actionGatheringMyNameActionGatheringPost({ name }) as unknown as Promise<TData>, ...options });
/**
* Action Crafting
* Crafting an item. The character must be on a map with a workshop.
* @param data The data for the request.
* @param data.name Name of your character.
* @param data.requestBody
* @returns SkillResponseSchema The item was successfully crafted.
* @throws ApiError
*/
export const useMyCharactersServiceActionCraftingMyNameActionCraftingPost = <TData = Common.MyCharactersServiceActionCraftingMyNameActionCraftingPostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
  requestBody: CraftingSchema;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
  requestBody: CraftingSchema;
}, TContext>({ mutationFn: ({ name, requestBody }) => MyCharactersService.actionCraftingMyNameActionCraftingPost({ name, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Action Deposit Bank
* Deposit an item in a bank on the character's map.
* @param data The data for the request.
* @param data.name Name of your character.
* @param data.requestBody
* @returns BankItemTransactionResponseSchema Item successfully deposited in your bank.
* @throws ApiError
*/
export const useMyCharactersServiceActionDepositBankMyNameActionBankDepositPost = <TData = Common.MyCharactersServiceActionDepositBankMyNameActionBankDepositPostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
  requestBody: SimpleItemSchema;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
  requestBody: SimpleItemSchema;
}, TContext>({ mutationFn: ({ name, requestBody }) => MyCharactersService.actionDepositBankMyNameActionBankDepositPost({ name, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Action Deposit Bank Gold
* Deposit golds in a bank on the character's map.
* @param data The data for the request.
* @param data.name Name of your character.
* @param data.requestBody
* @returns BankGoldTransactionResponseSchema Golds successfully deposited in your bank.
* @throws ApiError
*/
export const useMyCharactersServiceActionDepositBankGoldMyNameActionBankDepositGoldPost = <TData = Common.MyCharactersServiceActionDepositBankGoldMyNameActionBankDepositGoldPostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
  requestBody: DepositWithdrawGoldSchema;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
  requestBody: DepositWithdrawGoldSchema;
}, TContext>({ mutationFn: ({ name, requestBody }) => MyCharactersService.actionDepositBankGoldMyNameActionBankDepositGoldPost({ name, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Action Recycling
* Recyling an item. The character must be on a map with a workshop (only for equipments and weapons).
* @param data The data for the request.
* @param data.name Name of your character.
* @param data.requestBody
* @returns RecyclingResponseSchema The items were successfully recycled.
* @throws ApiError
*/
export const useMyCharactersServiceActionRecyclingMyNameActionRecyclingPost = <TData = Common.MyCharactersServiceActionRecyclingMyNameActionRecyclingPostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
  requestBody: RecyclingSchema;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
  requestBody: RecyclingSchema;
}, TContext>({ mutationFn: ({ name, requestBody }) => MyCharactersService.actionRecyclingMyNameActionRecyclingPost({ name, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Action Withdraw Bank
* Take an item from your bank and put it in the character's inventory.
* @param data The data for the request.
* @param data.name Name of your character.
* @param data.requestBody
* @returns BankItemTransactionResponseSchema Item successfully withdraw from your bank.
* @throws ApiError
*/
export const useMyCharactersServiceActionWithdrawBankMyNameActionBankWithdrawPost = <TData = Common.MyCharactersServiceActionWithdrawBankMyNameActionBankWithdrawPostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
  requestBody: SimpleItemSchema;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
  requestBody: SimpleItemSchema;
}, TContext>({ mutationFn: ({ name, requestBody }) => MyCharactersService.actionWithdrawBankMyNameActionBankWithdrawPost({ name, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Action Withdraw Bank Gold
* Withdraw gold from your bank.
* @param data The data for the request.
* @param data.name Name of your character.
* @param data.requestBody
* @returns BankGoldTransactionResponseSchema Golds successfully withdraw from your bank.
* @throws ApiError
*/
export const useMyCharactersServiceActionWithdrawBankGoldMyNameActionBankWithdrawGoldPost = <TData = Common.MyCharactersServiceActionWithdrawBankGoldMyNameActionBankWithdrawGoldPostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
  requestBody: DepositWithdrawGoldSchema;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
  requestBody: DepositWithdrawGoldSchema;
}, TContext>({ mutationFn: ({ name, requestBody }) => MyCharactersService.actionWithdrawBankGoldMyNameActionBankWithdrawGoldPost({ name, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Action Ge Buy Item
* Buy an item at the Grand Exchange on the character's map.
* @param data The data for the request.
* @param data.name Name of your character.
* @param data.requestBody
* @returns GETransactionResponseSchema Item successfully buy from the Grand Exchange.
* @throws ApiError
*/
export const useMyCharactersServiceActionGeBuyItemMyNameActionGeBuyPost = <TData = Common.MyCharactersServiceActionGeBuyItemMyNameActionGeBuyPostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
  requestBody: GETransactionItemSchema;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
  requestBody: GETransactionItemSchema;
}, TContext>({ mutationFn: ({ name, requestBody }) => MyCharactersService.actionGeBuyItemMyNameActionGeBuyPost({ name, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Action Ge Sell Item
* Sell an item at the Grand Exchange on the character's map.
* @param data The data for the request.
* @param data.name Name of your character.
* @param data.requestBody
* @returns GETransactionResponseSchema Item successfully sell at the Grand Exchange.
* @throws ApiError
*/
export const useMyCharactersServiceActionGeSellItemMyNameActionGeSellPost = <TData = Common.MyCharactersServiceActionGeSellItemMyNameActionGeSellPostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
  requestBody: GETransactionItemSchema;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
  requestBody: GETransactionItemSchema;
}, TContext>({ mutationFn: ({ name, requestBody }) => MyCharactersService.actionGeSellItemMyNameActionGeSellPost({ name, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Action Buy Bank Expansion
* Buy a 20 slots bank expansion.
* @param data The data for the request.
* @param data.name Name of your character.
* @returns BankExtensionTransactionResponseSchema Bank expansion successfully bought.
* @throws ApiError
*/
export const useMyCharactersServiceActionBuyBankExpansionMyNameActionBankBuyExpansionPost = <TData = Common.MyCharactersServiceActionBuyBankExpansionMyNameActionBankBuyExpansionPostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
}, TContext>({ mutationFn: ({ name }) => MyCharactersService.actionBuyBankExpansionMyNameActionBankBuyExpansionPost({ name }) as unknown as Promise<TData>, ...options });
/**
* Action Accept New Task
* Accepting a new task.
* @param data The data for the request.
* @param data.name Name of your character.
* @returns TaskResponseSchema New task successfully accepted.
* @throws ApiError
*/
export const useMyCharactersServiceActionAcceptNewTaskMyNameActionTaskNewPost = <TData = Common.MyCharactersServiceActionAcceptNewTaskMyNameActionTaskNewPostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
}, TContext>({ mutationFn: ({ name }) => MyCharactersService.actionAcceptNewTaskMyNameActionTaskNewPost({ name }) as unknown as Promise<TData>, ...options });
/**
* Action Complete Task
* Complete a task.
* @param data The data for the request.
* @param data.name Name of your character.
* @returns TaskRewardResponseSchema The task has been successfully completed.
* @throws ApiError
*/
export const useMyCharactersServiceActionCompleteTaskMyNameActionTaskCompletePost = <TData = Common.MyCharactersServiceActionCompleteTaskMyNameActionTaskCompletePostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
}, TContext>({ mutationFn: ({ name }) => MyCharactersService.actionCompleteTaskMyNameActionTaskCompletePost({ name }) as unknown as Promise<TData>, ...options });
/**
* Action Task Exchange
* Exchange 3 tasks coins for a random reward. Rewards are exclusive resources for crafting  items.
* @param data The data for the request.
* @param data.name Name of your character.
* @returns TaskRewardResponseSchema The tasks coins have been successfully exchanged.
* @throws ApiError
*/
export const useMyCharactersServiceActionTaskExchangeMyNameActionTaskExchangePost = <TData = Common.MyCharactersServiceActionTaskExchangeMyNameActionTaskExchangePostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
}, TContext>({ mutationFn: ({ name }) => MyCharactersService.actionTaskExchangeMyNameActionTaskExchangePost({ name }) as unknown as Promise<TData>, ...options });
/**
* Action Task Cancel
* Cancel a task for 1 tasks coin.
* @param data The data for the request.
* @param data.name Name of your character.
* @returns TaskCancelledResponseSchema The task has been successfully cancelled.
* @throws ApiError
*/
export const useMyCharactersServiceActionTaskCancelMyNameActionTaskCancelPost = <TData = Common.MyCharactersServiceActionTaskCancelMyNameActionTaskCancelPostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
}, TContext>({ mutationFn: ({ name }) => MyCharactersService.actionTaskCancelMyNameActionTaskCancelPost({ name }) as unknown as Promise<TData>, ...options });
/**
* Action Delete Item
* Delete an item from your character's inventory.
* @param data The data for the request.
* @param data.name Name of your character.
* @param data.requestBody
* @returns DeleteItemResponseSchema Item successfully deleted from your character.
* @throws ApiError
*/
export const useMyCharactersServiceActionDeleteItemMyNameActionDeletePost = <TData = Common.MyCharactersServiceActionDeleteItemMyNameActionDeletePostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name: string;
  requestBody: SimpleItemSchema;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name: string;
  requestBody: SimpleItemSchema;
}, TContext>({ mutationFn: ({ name, requestBody }) => MyCharactersService.actionDeleteItemMyNameActionDeletePost({ name, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Change Password
* Change your account password. Changing the password reset the account token.
* @param data The data for the request.
* @param data.requestBody
* @returns ResponseSchema Password changed successfully.
* @throws ApiError
*/
export const useMyAccountServiceChangePasswordMyChangePasswordPost = <TData = Common.MyAccountServiceChangePasswordMyChangePasswordPostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: ChangePassword;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: ChangePassword;
}, TContext>({ mutationFn: ({ requestBody }) => MyAccountService.changePasswordMyChangePasswordPost({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* Create Character
* Create new character on your account. You can create up to 5 characters.
* @param data The data for the request.
* @param data.requestBody
* @returns CharacterResponseSchema Successfully created character.
* @throws ApiError
*/
export const useCharactersServiceCreateCharacterCharactersCreatePost = <TData = Common.CharactersServiceCreateCharacterCharactersCreatePostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: AddCharacterSchema;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: AddCharacterSchema;
}, TContext>({ mutationFn: ({ requestBody }) => CharactersService.createCharacterCharactersCreatePost({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* Delete Character
* Delete character on your account.
* @param data The data for the request.
* @param data.requestBody
* @returns CharacterResponseSchema Successfully deleted character.
* @throws ApiError
*/
export const useCharactersServiceDeleteCharacterCharactersDeletePost = <TData = Common.CharactersServiceDeleteCharacterCharactersDeletePostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: DeleteCharacterSchema;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: DeleteCharacterSchema;
}, TContext>({ mutationFn: ({ requestBody }) => CharactersService.deleteCharacterCharactersDeletePost({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* Create Account
* Create an account.
* @param data The data for the request.
* @param data.requestBody
* @returns ResponseSchema Account created successfully.
* @throws ApiError
*/
export const useAccountsServiceCreateAccountAccountsCreatePost = <TData = Common.AccountsServiceCreateAccountAccountsCreatePostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: AddAccountSchema;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: AddAccountSchema;
}, TContext>({ mutationFn: ({ requestBody }) => AccountsService.createAccountAccountsCreatePost({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* Generate Token
* Use your account as HTTPBasic Auth to generate your token to use the API. You can also generate your token directly on the website.
* @returns TokenResponseSchema Token generated successfully
* @throws ApiError
*/
export const useTokenServiceGenerateTokenTokenPost = <TData = Common.TokenServiceGenerateTokenTokenPostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => TokenService.generateTokenTokenPost() as unknown as Promise<TData>, ...options });
