// generated with @7nohe/openapi-react-query-codegen@1.6.0 

import { UseQueryResult } from "@tanstack/react-query";
import { AccountsService, AchievementsService, CharactersService, DefaultService, EventsService, GrandExchangeService, ItemsService, LeaderboardService, MapsService, MonstersService, MyAccountService, MyCharactersService, ResourcesService, TokenService } from "../requests/services.gen";
export type MyCharactersServiceGetAllCharactersLogsMyLogsGetDefaultResponse = Awaited<ReturnType<typeof MyCharactersService.getAllCharactersLogsMyLogsGet>>;
export type MyCharactersServiceGetAllCharactersLogsMyLogsGetQueryResult<TData = MyCharactersServiceGetAllCharactersLogsMyLogsGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMyCharactersServiceGetAllCharactersLogsMyLogsGetKey = "MyCharactersServiceGetAllCharactersLogsMyLogsGet";
export const UseMyCharactersServiceGetAllCharactersLogsMyLogsGetKeyFn = ({ page, size }: {
  page?: number;
  size?: number;
} = {}, queryKey?: Array<unknown>) => [useMyCharactersServiceGetAllCharactersLogsMyLogsGetKey, ...(queryKey ?? [{ page, size }])];
export type MyCharactersServiceGetMyCharactersMyCharactersGetDefaultResponse = Awaited<ReturnType<typeof MyCharactersService.getMyCharactersMyCharactersGet>>;
export type MyCharactersServiceGetMyCharactersMyCharactersGetQueryResult<TData = MyCharactersServiceGetMyCharactersMyCharactersGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMyCharactersServiceGetMyCharactersMyCharactersGetKey = "MyCharactersServiceGetMyCharactersMyCharactersGet";
export const UseMyCharactersServiceGetMyCharactersMyCharactersGetKeyFn = (queryKey?: Array<unknown>) => [useMyCharactersServiceGetMyCharactersMyCharactersGetKey, ...(queryKey ?? [])];
export type MyAccountServiceGetBankDetailsMyBankGetDefaultResponse = Awaited<ReturnType<typeof MyAccountService.getBankDetailsMyBankGet>>;
export type MyAccountServiceGetBankDetailsMyBankGetQueryResult<TData = MyAccountServiceGetBankDetailsMyBankGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMyAccountServiceGetBankDetailsMyBankGetKey = "MyAccountServiceGetBankDetailsMyBankGet";
export const UseMyAccountServiceGetBankDetailsMyBankGetKeyFn = (queryKey?: Array<unknown>) => [useMyAccountServiceGetBankDetailsMyBankGetKey, ...(queryKey ?? [])];
export type MyAccountServiceGetBankItemsMyBankItemsGetDefaultResponse = Awaited<ReturnType<typeof MyAccountService.getBankItemsMyBankItemsGet>>;
export type MyAccountServiceGetBankItemsMyBankItemsGetQueryResult<TData = MyAccountServiceGetBankItemsMyBankItemsGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMyAccountServiceGetBankItemsMyBankItemsGetKey = "MyAccountServiceGetBankItemsMyBankItemsGet";
export const UseMyAccountServiceGetBankItemsMyBankItemsGetKeyFn = ({ itemCode, page, size }: {
  itemCode?: string;
  page?: number;
  size?: number;
} = {}, queryKey?: Array<unknown>) => [useMyAccountServiceGetBankItemsMyBankItemsGetKey, ...(queryKey ?? [{ itemCode, page, size }])];
export type CharactersServiceGetAllCharactersCharactersGetDefaultResponse = Awaited<ReturnType<typeof CharactersService.getAllCharactersCharactersGet>>;
export type CharactersServiceGetAllCharactersCharactersGetQueryResult<TData = CharactersServiceGetAllCharactersCharactersGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useCharactersServiceGetAllCharactersCharactersGetKey = "CharactersServiceGetAllCharactersCharactersGet";
export const UseCharactersServiceGetAllCharactersCharactersGetKeyFn = ({ page, size }: {
  page?: number;
  size?: number;
} = {}, queryKey?: Array<unknown>) => [useCharactersServiceGetAllCharactersCharactersGetKey, ...(queryKey ?? [{ page, size }])];
export type CharactersServiceGetCharacterCharactersNameGetDefaultResponse = Awaited<ReturnType<typeof CharactersService.getCharacterCharactersNameGet>>;
export type CharactersServiceGetCharacterCharactersNameGetQueryResult<TData = CharactersServiceGetCharacterCharactersNameGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useCharactersServiceGetCharacterCharactersNameGetKey = "CharactersServiceGetCharacterCharactersNameGet";
export const UseCharactersServiceGetCharacterCharactersNameGetKeyFn = ({ name }: {
  name: string;
}, queryKey?: Array<unknown>) => [useCharactersServiceGetCharacterCharactersNameGetKey, ...(queryKey ?? [{ name }])];
export type CharactersServiceGetCharacterAchievementsCharactersNameAchievementsGetDefaultResponse = Awaited<ReturnType<typeof CharactersService.getCharacterAchievementsCharactersNameAchievementsGet>>;
export type CharactersServiceGetCharacterAchievementsCharactersNameAchievementsGetQueryResult<TData = CharactersServiceGetCharacterAchievementsCharactersNameAchievementsGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useCharactersServiceGetCharacterAchievementsCharactersNameAchievementsGetKey = "CharactersServiceGetCharacterAchievementsCharactersNameAchievementsGet";
export const UseCharactersServiceGetCharacterAchievementsCharactersNameAchievementsGetKeyFn = ({ completed, name, page, size, type }: {
  completed?: boolean;
  name: string;
  page?: number;
  size?: number;
  type?: "combat_kill" | "combat_drop" | "combat_level" | "gathering" | "crafting" | "recycling" | "task" | "other";
}, queryKey?: Array<unknown>) => [useCharactersServiceGetCharacterAchievementsCharactersNameAchievementsGetKey, ...(queryKey ?? [{ completed, name, page, size, type }])];
export type MapsServiceGetAllMapsMapsGetDefaultResponse = Awaited<ReturnType<typeof MapsService.getAllMapsMapsGet>>;
export type MapsServiceGetAllMapsMapsGetQueryResult<TData = MapsServiceGetAllMapsMapsGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMapsServiceGetAllMapsMapsGetKey = "MapsServiceGetAllMapsMapsGet";
export const UseMapsServiceGetAllMapsMapsGetKeyFn = ({ contentCode, contentType, page, size }: {
  contentCode?: string;
  contentType?: "monster" | "resource" | "workshop" | "bank" | "grand_exchange" | "tasks_master";
  page?: number;
  size?: number;
} = {}, queryKey?: Array<unknown>) => [useMapsServiceGetAllMapsMapsGetKey, ...(queryKey ?? [{ contentCode, contentType, page, size }])];
export type MapsServiceGetMapMapsXYGetDefaultResponse = Awaited<ReturnType<typeof MapsService.getMapMapsXYGet>>;
export type MapsServiceGetMapMapsXYGetQueryResult<TData = MapsServiceGetMapMapsXYGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMapsServiceGetMapMapsXYGetKey = "MapsServiceGetMapMapsXYGet";
export const UseMapsServiceGetMapMapsXYGetKeyFn = ({ x, y }: {
  x: number;
  y: number;
}, queryKey?: Array<unknown>) => [useMapsServiceGetMapMapsXYGetKey, ...(queryKey ?? [{ x, y }])];
export type ItemsServiceGetAllItemsItemsGetDefaultResponse = Awaited<ReturnType<typeof ItemsService.getAllItemsItemsGet>>;
export type ItemsServiceGetAllItemsItemsGetQueryResult<TData = ItemsServiceGetAllItemsItemsGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useItemsServiceGetAllItemsItemsGetKey = "ItemsServiceGetAllItemsItemsGet";
export const UseItemsServiceGetAllItemsItemsGetKeyFn = ({ craftMaterial, craftSkill, maxLevel, minLevel, name, page, size, type }: {
  craftMaterial?: string;
  craftSkill?: "weaponcrafting" | "gearcrafting" | "jewelrycrafting" | "cooking" | "woodcutting" | "mining";
  maxLevel?: number;
  minLevel?: number;
  name?: string;
  page?: number;
  size?: number;
  type?: "resource" | "consumable" | "body_armor" | "weapon" | "leg_armor" | "helmet" | "boots" | "shield" | "amulet" | "ring" | "artifact";
} = {}, queryKey?: Array<unknown>) => [useItemsServiceGetAllItemsItemsGetKey, ...(queryKey ?? [{ craftMaterial, craftSkill, maxLevel, minLevel, name, page, size, type }])];
export type ItemsServiceGetItemItemsCodeGetDefaultResponse = Awaited<ReturnType<typeof ItemsService.getItemItemsCodeGet>>;
export type ItemsServiceGetItemItemsCodeGetQueryResult<TData = ItemsServiceGetItemItemsCodeGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useItemsServiceGetItemItemsCodeGetKey = "ItemsServiceGetItemItemsCodeGet";
export const UseItemsServiceGetItemItemsCodeGetKeyFn = ({ code }: {
  code: string;
}, queryKey?: Array<unknown>) => [useItemsServiceGetItemItemsCodeGetKey, ...(queryKey ?? [{ code }])];
export type MonstersServiceGetAllMonstersMonstersGetDefaultResponse = Awaited<ReturnType<typeof MonstersService.getAllMonstersMonstersGet>>;
export type MonstersServiceGetAllMonstersMonstersGetQueryResult<TData = MonstersServiceGetAllMonstersMonstersGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMonstersServiceGetAllMonstersMonstersGetKey = "MonstersServiceGetAllMonstersMonstersGet";
export const UseMonstersServiceGetAllMonstersMonstersGetKeyFn = ({ drop, maxLevel, minLevel, page, size }: {
  drop?: string;
  maxLevel?: number;
  minLevel?: number;
  page?: number;
  size?: number;
} = {}, queryKey?: Array<unknown>) => [useMonstersServiceGetAllMonstersMonstersGetKey, ...(queryKey ?? [{ drop, maxLevel, minLevel, page, size }])];
export type MonstersServiceGetMonsterMonstersCodeGetDefaultResponse = Awaited<ReturnType<typeof MonstersService.getMonsterMonstersCodeGet>>;
export type MonstersServiceGetMonsterMonstersCodeGetQueryResult<TData = MonstersServiceGetMonsterMonstersCodeGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMonstersServiceGetMonsterMonstersCodeGetKey = "MonstersServiceGetMonsterMonstersCodeGet";
export const UseMonstersServiceGetMonsterMonstersCodeGetKeyFn = ({ code }: {
  code: string;
}, queryKey?: Array<unknown>) => [useMonstersServiceGetMonsterMonstersCodeGetKey, ...(queryKey ?? [{ code }])];
export type ResourcesServiceGetAllResourcesResourcesGetDefaultResponse = Awaited<ReturnType<typeof ResourcesService.getAllResourcesResourcesGet>>;
export type ResourcesServiceGetAllResourcesResourcesGetQueryResult<TData = ResourcesServiceGetAllResourcesResourcesGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useResourcesServiceGetAllResourcesResourcesGetKey = "ResourcesServiceGetAllResourcesResourcesGet";
export const UseResourcesServiceGetAllResourcesResourcesGetKeyFn = ({ drop, maxLevel, minLevel, page, size, skill }: {
  drop?: string;
  maxLevel?: number;
  minLevel?: number;
  page?: number;
  size?: number;
  skill?: "woodcutting" | "mining" | "fishing";
} = {}, queryKey?: Array<unknown>) => [useResourcesServiceGetAllResourcesResourcesGetKey, ...(queryKey ?? [{ drop, maxLevel, minLevel, page, size, skill }])];
export type ResourcesServiceGetResourceResourcesCodeGetDefaultResponse = Awaited<ReturnType<typeof ResourcesService.getResourceResourcesCodeGet>>;
export type ResourcesServiceGetResourceResourcesCodeGetQueryResult<TData = ResourcesServiceGetResourceResourcesCodeGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useResourcesServiceGetResourceResourcesCodeGetKey = "ResourcesServiceGetResourceResourcesCodeGet";
export const UseResourcesServiceGetResourceResourcesCodeGetKeyFn = ({ code }: {
  code: string;
}, queryKey?: Array<unknown>) => [useResourcesServiceGetResourceResourcesCodeGetKey, ...(queryKey ?? [{ code }])];
export type EventsServiceGetAllEventsEventsGetDefaultResponse = Awaited<ReturnType<typeof EventsService.getAllEventsEventsGet>>;
export type EventsServiceGetAllEventsEventsGetQueryResult<TData = EventsServiceGetAllEventsEventsGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useEventsServiceGetAllEventsEventsGetKey = "EventsServiceGetAllEventsEventsGet";
export const UseEventsServiceGetAllEventsEventsGetKeyFn = ({ page, size }: {
  page?: number;
  size?: number;
} = {}, queryKey?: Array<unknown>) => [useEventsServiceGetAllEventsEventsGetKey, ...(queryKey ?? [{ page, size }])];
export type GrandExchangeServiceGetAllGeItemsGeGetDefaultResponse = Awaited<ReturnType<typeof GrandExchangeService.getAllGeItemsGeGet>>;
export type GrandExchangeServiceGetAllGeItemsGeGetQueryResult<TData = GrandExchangeServiceGetAllGeItemsGeGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useGrandExchangeServiceGetAllGeItemsGeGetKey = "GrandExchangeServiceGetAllGeItemsGeGet";
export const UseGrandExchangeServiceGetAllGeItemsGeGetKeyFn = ({ page, size }: {
  page?: number;
  size?: number;
} = {}, queryKey?: Array<unknown>) => [useGrandExchangeServiceGetAllGeItemsGeGetKey, ...(queryKey ?? [{ page, size }])];
export type GrandExchangeServiceGetGeItemGeCodeGetDefaultResponse = Awaited<ReturnType<typeof GrandExchangeService.getGeItemGeCodeGet>>;
export type GrandExchangeServiceGetGeItemGeCodeGetQueryResult<TData = GrandExchangeServiceGetGeItemGeCodeGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useGrandExchangeServiceGetGeItemGeCodeGetKey = "GrandExchangeServiceGetGeItemGeCodeGet";
export const UseGrandExchangeServiceGetGeItemGeCodeGetKeyFn = ({ code }: {
  code: string;
}, queryKey?: Array<unknown>) => [useGrandExchangeServiceGetGeItemGeCodeGetKey, ...(queryKey ?? [{ code }])];
export type AchievementsServiceGetAllAchievementsAchievementsGetDefaultResponse = Awaited<ReturnType<typeof AchievementsService.getAllAchievementsAchievementsGet>>;
export type AchievementsServiceGetAllAchievementsAchievementsGetQueryResult<TData = AchievementsServiceGetAllAchievementsAchievementsGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAchievementsServiceGetAllAchievementsAchievementsGetKey = "AchievementsServiceGetAllAchievementsAchievementsGet";
export const UseAchievementsServiceGetAllAchievementsAchievementsGetKeyFn = ({ page, size, type }: {
  page?: number;
  size?: number;
  type?: "combat_kill" | "combat_drop" | "combat_level" | "gathering" | "crafting" | "recycling" | "task" | "other";
} = {}, queryKey?: Array<unknown>) => [useAchievementsServiceGetAllAchievementsAchievementsGetKey, ...(queryKey ?? [{ page, size, type }])];
export type AchievementsServiceGetAchievementAchievementsCodeGetDefaultResponse = Awaited<ReturnType<typeof AchievementsService.getAchievementAchievementsCodeGet>>;
export type AchievementsServiceGetAchievementAchievementsCodeGetQueryResult<TData = AchievementsServiceGetAchievementAchievementsCodeGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAchievementsServiceGetAchievementAchievementsCodeGetKey = "AchievementsServiceGetAchievementAchievementsCodeGet";
export const UseAchievementsServiceGetAchievementAchievementsCodeGetKeyFn = ({ code }: {
  code: string;
}, queryKey?: Array<unknown>) => [useAchievementsServiceGetAchievementAchievementsCodeGetKey, ...(queryKey ?? [{ code }])];
export type LeaderboardServiceGetLeaderboardLeaderboardGetDefaultResponse = Awaited<ReturnType<typeof LeaderboardService.getLeaderboardLeaderboardGet>>;
export type LeaderboardServiceGetLeaderboardLeaderboardGetQueryResult<TData = LeaderboardServiceGetLeaderboardLeaderboardGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useLeaderboardServiceGetLeaderboardLeaderboardGetKey = "LeaderboardServiceGetLeaderboardLeaderboardGet";
export const UseLeaderboardServiceGetLeaderboardLeaderboardGetKeyFn = ({ page, size, sort }: {
  page?: number;
  size?: number;
  sort?: "weaponcrafting" | "gearcrafting" | "jewelrycrafting" | "cooking" | "woodcutting" | "mining" | "fishing" | "combat" | "achievements_points" | "gold";
} = {}, queryKey?: Array<unknown>) => [useLeaderboardServiceGetLeaderboardLeaderboardGetKey, ...(queryKey ?? [{ page, size, sort }])];
export type DefaultServiceGetStatusGetDefaultResponse = Awaited<ReturnType<typeof DefaultService.getStatusGet>>;
export type DefaultServiceGetStatusGetQueryResult<TData = DefaultServiceGetStatusGetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDefaultServiceGetStatusGetKey = "DefaultServiceGetStatusGet";
export const UseDefaultServiceGetStatusGetKeyFn = (queryKey?: Array<unknown>) => [useDefaultServiceGetStatusGetKey, ...(queryKey ?? [])];
export type MyCharactersServiceActionMoveMyNameActionMovePostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionMoveMyNameActionMovePost>>;
export type MyCharactersServiceActionEquipItemMyNameActionEquipPostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionEquipItemMyNameActionEquipPost>>;
export type MyCharactersServiceActionUnequipItemMyNameActionUnequipPostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionUnequipItemMyNameActionUnequipPost>>;
export type MyCharactersServiceActionFightMyNameActionFightPostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionFightMyNameActionFightPost>>;
export type MyCharactersServiceActionGatheringMyNameActionGatheringPostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionGatheringMyNameActionGatheringPost>>;
export type MyCharactersServiceActionCraftingMyNameActionCraftingPostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionCraftingMyNameActionCraftingPost>>;
export type MyCharactersServiceActionDepositBankMyNameActionBankDepositPostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionDepositBankMyNameActionBankDepositPost>>;
export type MyCharactersServiceActionDepositBankGoldMyNameActionBankDepositGoldPostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionDepositBankGoldMyNameActionBankDepositGoldPost>>;
export type MyCharactersServiceActionRecyclingMyNameActionRecyclingPostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionRecyclingMyNameActionRecyclingPost>>;
export type MyCharactersServiceActionWithdrawBankMyNameActionBankWithdrawPostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionWithdrawBankMyNameActionBankWithdrawPost>>;
export type MyCharactersServiceActionWithdrawBankGoldMyNameActionBankWithdrawGoldPostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionWithdrawBankGoldMyNameActionBankWithdrawGoldPost>>;
export type MyCharactersServiceActionGeBuyItemMyNameActionGeBuyPostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionGeBuyItemMyNameActionGeBuyPost>>;
export type MyCharactersServiceActionGeSellItemMyNameActionGeSellPostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionGeSellItemMyNameActionGeSellPost>>;
export type MyCharactersServiceActionBuyBankExpansionMyNameActionBankBuyExpansionPostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionBuyBankExpansionMyNameActionBankBuyExpansionPost>>;
export type MyCharactersServiceActionAcceptNewTaskMyNameActionTaskNewPostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionAcceptNewTaskMyNameActionTaskNewPost>>;
export type MyCharactersServiceActionCompleteTaskMyNameActionTaskCompletePostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionCompleteTaskMyNameActionTaskCompletePost>>;
export type MyCharactersServiceActionTaskExchangeMyNameActionTaskExchangePostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionTaskExchangeMyNameActionTaskExchangePost>>;
export type MyCharactersServiceActionTaskCancelMyNameActionTaskCancelPostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionTaskCancelMyNameActionTaskCancelPost>>;
export type MyCharactersServiceActionDeleteItemMyNameActionDeletePostMutationResult = Awaited<ReturnType<typeof MyCharactersService.actionDeleteItemMyNameActionDeletePost>>;
export type MyAccountServiceChangePasswordMyChangePasswordPostMutationResult = Awaited<ReturnType<typeof MyAccountService.changePasswordMyChangePasswordPost>>;
export type CharactersServiceCreateCharacterCharactersCreatePostMutationResult = Awaited<ReturnType<typeof CharactersService.createCharacterCharactersCreatePost>>;
export type CharactersServiceDeleteCharacterCharactersDeletePostMutationResult = Awaited<ReturnType<typeof CharactersService.deleteCharacterCharactersDeletePost>>;
export type AccountsServiceCreateAccountAccountsCreatePostMutationResult = Awaited<ReturnType<typeof AccountsService.createAccountAccountsCreatePost>>;
export type TokenServiceGenerateTokenTokenPostMutationResult = Awaited<ReturnType<typeof TokenService.generateTokenTokenPost>>;
