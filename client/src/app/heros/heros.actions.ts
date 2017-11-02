import { Action } from '@ngrx/store';
import { Hero } from "../models/hero";

export const CREATE_HERO = '[heros] Create hero';
export const CREATE_HERO_ERROR = '[heros] Create hero error';
export const CREATE_HERO_SUCCESS = '[heros] Create hero success';
export const CREATE_HERO_DIALOG_CLOSE = '[heros] Close create hero dialog';
export const CREATE_HERO_DIALOG_OPEN = '[heros] Open create hero dialog';
export const LOAD_HERO = '[heros] Load hero';
export const LOAD_HERO_ERROR = '[heros] Load hero error';
export const LOAD_HERO_SUCCESS = '[heros] Load hero success';
export const LOAD_HERO_IMAGE = '[heros] Load hero image';
export const LOAD_HERO_IMAGE_ERROR = '[heros] Load hero image error';
export const LOAD_HERO_IMAGE_SUCCESS = '[heros] Load hero image success';
export const LOAD_HEROS = '[heros] Load heros';
export const LOAD_HEROS_ERROR = '[heros] Load heros error';
export const LOAD_HEROS_SUCCESS = '[heros] Load heros success';
export const REMOVE_HERO = '[heros] Remove hero';
export const REMOVE_HERO_ERROR = '[heros] Remove hero error';
export const REMOVE_HERO_SUCCESS = '[heros] Remove hero success';

export class CreateHeroAction implements Action {
  readonly type = CREATE_HERO;
  constructor(public payload: { hero: Hero }) {}
}

export class CreateHeroErrorAction implements Action {
  readonly type = CREATE_HERO_ERROR;
  constructor(public payload: { error: Error }) {}
}

export class CreateHeroSuccessAction implements Action {
  readonly type = CREATE_HERO_SUCCESS;
  constructor(public payload: { hero: Hero }) {}
}

export class CreateHeroDialogCloseAction implements Action {
  readonly type = CREATE_HERO_DIALOG_CLOSE;
}

export class CreateHeroDialogOpenAction implements Action {
  readonly type = CREATE_HERO_DIALOG_OPEN;
}

export class LoadHeroAction implements Action {
  readonly type = LOAD_HERO;
  constructor(public payload: { id: string }) {}
}

export class LoadHeroErrorAction implements Action {
  readonly type = LOAD_HERO_ERROR;
  constructor(public payload: { error: Error }) {}
}

export class LoadHeroSuccessAction implements Action {
  readonly type = LOAD_HERO_SUCCESS;
  constructor(public payload: { hero: Hero }) {}
}

export class LoadHeroImageAction implements Action {
  readonly type = LOAD_HERO_IMAGE;
  constructor(public payload: { hero: Hero }) {}
}

export class LoadHeroImageErrorAction implements Action {
  readonly type = LOAD_HERO_IMAGE_ERROR;
  constructor(public payload: { error: Error }) {}
}

export class LoadHeroImageSuccessAction implements Action {
  readonly type = LOAD_HERO_IMAGE_SUCCESS;
  constructor(public payload: { image: Blob }) {}
}

export class LoadHerosAction implements Action {
  readonly type = LOAD_HEROS;
}

export class LoadHerosErrorAction implements Action {
  readonly type = LOAD_HEROS_ERROR;
  constructor(public payload: { error: Error }) {}
}

export class LoadHerosSuccessAction implements Action {
  readonly type = LOAD_HEROS_SUCCESS;
  constructor(public payload: { heros: Hero[] }) {}
}

export class RemoveHeroAction implements Action {
  readonly type = REMOVE_HERO;
  constructor(public payload: { hero: Hero }) {}
}

export class RemoveHeroErrorAction implements Action {
  readonly type = REMOVE_HERO_ERROR;
  constructor(public payload: { error: Error }) {}
}

export class RemoveHeroSuccessAction implements Action {
  readonly type = REMOVE_HERO_SUCCESS;
  constructor(public payload: { hero: Hero }) {}
}

export type Actions =
  CreateHeroAction
  | CreateHeroErrorAction
  | CreateHeroSuccessAction
  | CreateHeroDialogCloseAction
  | CreateHeroDialogOpenAction
  | LoadHeroAction
  | LoadHeroErrorAction
  | LoadHeroSuccessAction
  | LoadHeroImageAction
  | LoadHeroImageErrorAction
  | LoadHeroImageSuccessAction
  | LoadHerosAction
  | LoadHerosErrorAction
  | LoadHerosSuccessAction
  | RemoveHeroAction
  | RemoveHeroErrorAction
  | RemoveHeroSuccessAction;