import {
  CHANGE_TO_DE,
  CHANGE_TO_EN,
  CHANGE_TO_FR,
  CLOSE_SIDE_MENU,
  DISPAY_LN,
  FIX_LN,
  HEADER_OFF,
  HEADER_ON,
  OPEN_SIDE_MENU,
  SWITCH_DARK,
  SWITCH_INITIAL,
  SWITCH_LIGHT,
  SWITCH_TO_CE,
  SWITCH_TO_ED,
  SWITCH_TO_EX,
} from "./types";

export const ThemeToggleLight = () => (dispatch) => {
  dispatch({
    type: SWITCH_LIGHT,
  });
};

export const ThemeToggleDark = () => (dispatch) => {
  dispatch({
    type: SWITCH_DARK,
  });
};

export const SildeMenuOpen = () => (dispatch) => {
  dispatch({
    type: OPEN_SIDE_MENU,
  });
};

export const SildeMenuClose = () => (dispatch) => {
  dispatch({
    type: CLOSE_SIDE_MENU,
  });
};

export const HeaderOn = () => (dispatch) => {
  dispatch({
    type: HEADER_ON,
  });
};

export const HeaderOff = () => (dispatch) => {
  dispatch({
    type: HEADER_OFF,
  });
};

// languages actions :

export const ChangeLanguage = (data) => (dispatch) => {
  dispatch({
    type: DISPAY_LN,
    payload: {
      data: data,
    },
  });
};


