import { darken } from '@mui/material/styles';

const notchHeight = 0;

export const themeSettings = {
  webFontLoaderConfig: {
    google: {
      families: ['Montserrat:400,600', 'Material Icons'],
    },
  },
  typography: {
    fontFamily: 'Montserrat, "Helvetica Neue", Arial, sans-serif',
  },
  colors: {
    backgroundDefault: '#efefef',
    backgroundMedium: '#888',
    backgroundMediumHover: '#b9b9b9',
    backgroundPaper: '#fff',
    backgroundPrimaryLight: '#fff7fa',
    backgroundPrimaryLightHover: '#ffe6ef',
    backgroundUnread: '#fafafa',
    bottomNavigationAction: '#999999',
    bottomNavigationActiveColor: '#fff',
    bottomNavigationBackgroundColor: '#373132',
    bottomNavigationBadge: '#2aa354',
    divider: '#efefef',
    error: '#d00',
    errorBg: 'rgba(221, 0, 0, 0.1)',
    labelColor: '#858585',
    info: '#286BA4',
    lightboxBackground: 'rgba(0, 0, 0, 0.88)',
    lightboxButtonBackground: 'rgba(255, 255, 255, 0.1)',
    primary: '#D50059',
    primaryContrastText: '#ffffff',
    primaryHover: 'rgba(213, 0, 89, 0.75)',
    secondary: '#373132',
    secondaryContrastText: '#ffffff',
    secondaryHover: '#5f5a5b',
    successBg: '#43a047',
    textDisabled: '#858585',
    textHint: '#888',
    textPrimary: '#444',
    textSecondary: '#666',
    topBarBackground: '#373132',
    topBarHover: '#5f5a5b',
    topBarText: '#fff',
    white: '#fff',
  },
  shadows: {
    1: '0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 2px 0 rgba(0, 0, 0, 0.16)',
    2: '0 3px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.12)',
    3: '0 6px 6px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.12)',
    4: '0 10px 10px 0 rgba(0, 0, 0, 0.12), 0 0 10px 0 rgba(0, 0, 0, 0.12)',
  },
  borderRadius: 8,
  spacingUnit: 8,
  footerBarHeight: 56,
  appBarHeight: 48,
  mainAppBarHeight: 80,
  editPagesMenuHeight: 180,
  sideBarWidth: 80,
  contentDetailWidth: 670,
  taskProgressPageWidth: 670,
  logoWrapperHeight: 100,
  logoWrapperHeightMobile: 56,
  smallNewsItemPreviewHeight: 96,
  chatOverlayWidth: 360,
  placeholders: {
    // smallProfileImage: smallProfileImagePlaceholder,
    // newsPreview: newsPreviewPlaceholder,
    // groupChat: groupChatPlaceholder,
  },
  // logoImage: logo,
  // brandedPageLogo: logo,
  brandedPageLogoHeight: 64,
  // brandedPageBackground: bgLogin,
  brandedPageBackgroundPosition: '50% 50%',
  // homepageBlocksBackground: bgLogin,
  homepageBlocksBackgroundPosition: '50% 0',
  notchHeight,
  appBackground: '#efefef',
};

export function createTheme(ts) {
  return {
    appBackground: ts.appBackground,
    logo: {
      image: ts.logoImage,
      style: {
        width: '100%',
        height: 48,
        background: `url(${ts.logoImage}) no-repeat 50% 50%`,
        backgroundSize: 'contain',
        textIndent: '-999em',
      },
      mobileStyle: {
        height: '60%',
      },
    },
    brandedPage: {
      backgroundImage: ts.brandedPageBackground,
      backgroundPosition: ts.brandedPageBackgroundPosition,
      logo: ts.brandedPageLogo,
      logoHeight: ts.brandedPageLogoHeight,
    },
    homepageBlocks: {
      page: {
        background: `url(${ts.homepageBlocksBackground}) no-repeat ${ts.homepageBlocksBackgroundPosition}`,
        backgroundSize: 'cover',
      },
    },
    placeholders: ts.placeholders,
    pageContainer: {
      padding: ts.spacingUnit,
      paddingBottom: ts.spacingUnit * 2,
    },
    appBarHeight: ts.appBarHeight,
    mainAppBarHeight: ts.mainAppBarHeight,
    editPagesMenuHeight: ts.editPagesMenuHeight,
    sideBarWidth: ts.sideBarWidth,
    footerBarHeight: ts.footerBarHeight,
    logoWrapperHeight: ts.logoWrapperHeight,
    logoWrapperHeightMobile: ts.logoWrapperHeightMobile,
    contentDetailWidth: ts.contentDetailWidth,
    taskProgressPageWidth: ts.taskProgressPageWidth,
    smallNewsItemPreviewHeight: ts.smallNewsItemPreviewHeight,
    chatOverlayWidth: ts.chatOverlayWidth,
    notchHeight: ts.notchHeight,
    palette: {
      primary: {
        main: ts.colors.primary,
        contrastText: ts.colors.primaryContrastText,
        hover: ts.colors.primaryHover,
      },

      textColor: ts.colors.textColor,
      secondary: {
        main: ts.colors.secondary,
        contrastText: ts.colors.secondaryContrastText,
        hover: ts.colors.secondaryHover,
      },
      background: {
        default: ts.colors.backgroundDefault,
        paper: ts.colors.backgroundPaper,
        unread: ts.colors.backgroundUnread,
        mediumHover: ts.colors.backgroundMediumHover,

        barelyWhite: ts.colors.barelyWhite,
      },
      text: {
        primary: ts.colors.textPrimary,
        secondary: ts.colors.textSecondary,
        hint: ts.colors.textHint,
        disabled: ts.colors.textDisabled,
        label: ts.colors.labelColor,
      },
      error: {
        main: ts.colors.error,
        background: ts.colors.errorBg,
      },
      info: {
        main: ts.colors.info,
      },
      success: {
        main: ts.colors.successBg,
      },
      lightbox: {
        buttonBackground: ts.colors.lightboxButtonBackground,
        background: ts.colors.lightboxBackground,
      },
      divider: ts.colors.divider,

      bottomNavigationBadge: ts.colors.bottomNavigationBadge,
      bottomNavigationActiveColor: ts.colors.bottomNavigationActiveColor,
      bottomNavigationAction: ts.colors.bottomNavigationAction,
      chatPresenceColor: ts.colors.chatPresenceColor,
      topBar: {
        background: ts.colors.topBarBackground,
        hover: ts.colors.topBarHover,
        text: ts.colors.topBarText,
      },
    },
    shape: {
      borderRadius: ts.borderRadius,
    },
    spacing: ts.spacingUnit,

    typography: {
      // Use the system font instead of the default Roboto font.
      fontUrl: ts.typography.fontUrl,
      iconFontUrl: ts.typography.iconFontUrl,
      fontFamily: ts.typography.fontFamily,

      useNextVariants: true,
      fontWeightLight: 400,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      h2: {
        fontSize: '1.8750rem',
        lineHeight: '1.2em',
        color: ts.colors.textPrimary,
        fontWeight: 600,
      },
      h3: {
        fontSize: '1.5rem',
        lineHeight: '1.3333em',
        color: ts.colors.textPrimary,
        fontWeight: 600,
      },
      h4: {
        fontSize: '1.25rem',
        lineHeight: '1.2em',
        color: ts.colors.textPrimary,
        fontWeight: 600,
      },
      h5: {
        fontSize: '1rem',
        lineHeight: '1.1875em',
        color: ts.colors.textPrimary,
        fontWeight: 600,
      },
      h6: {
        fontSize: '0.875rem',
        lineHeight: '1.2857em',
        color: ts.colors.textPrimary,
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: '0.875rem',
        lineHeight: '1.2857em',
        color: ts.colors.textSecondary,
        fontWeight: 400,
      },
      subtitle2: {
        fontSize: '0.875rem',
        lineHeight: '1.2857em',
        color: ts.colors.textHint,
        fontWeight: 400,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: '1.2857em',
        color: ts.colors.textSecondary,
        fontWeight: 400,
      },
      body1: {
        fontSize: '0.875rem',
        lineHeight: '1.5em',
        color: ts.colors.textSecondary,
        fontWeight: 400,
      },
      caption: {
        fontSize: '0.6875rem',
        lineHeight: '1.4545em',
        color: ts.colors.textHint,
        fontWeight: 400,
      },
      button: {
        fontSize: '1rem',
        lineHeight: '1.1875em',
        fontWeight: 600,
        textTransform: 'none',
        '&:hover': {
          color: ts.colors.primary,
        },
      },
    },
    shadows: [
      'none',
      ts.shadows[1],
      ts.shadows[1],
      ts.shadows[1],
      ts.shadows[1],
      ts.shadows[1],
      ts.shadows[1],
      ts.shadows[2],
      ts.shadows[2],
      ts.shadows[2],
      ts.shadows[2],
      ts.shadows[2],
      ts.shadows[2],
      ts.shadows[3],
      ts.shadows[3],
      ts.shadows[3],
      ts.shadows[3],
      ts.shadows[3],
      ts.shadows[3],
      ts.shadows[4],
      ts.shadows[4],
      ts.shadows[4],
      ts.shadows[4],
      ts.shadows[4],
      ts.shadows[4],
    ],
    overrides: {
      MuiButton: {
        root: {
          minWidth: 100,
          minHeight: 50,
          padding: '15px 20px',
        },
        sizeSmall: {
          padding: '8px 18px',
          minWidth: 90,
          minHeight: 32,
          fontSize: '0.75rem',
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: ts.colors.primaryHover,
          },
        },
        containedSecondary: {
          '&:hover': {
            backgroundColor: ts.colors.secondaryHover,
          },
        },
      },
      MuiDialog: {
        paper: { paddingBottom: 'env(safe-area-inset-bottom, 0)' },
      },
      MuiPaper: {
        root: {
          '&.section': {
            paddingBottom: ts.spacingUnit * 2,
          },
        },
      },
      MuiInputBase: {
        root: {
          '&.Mui-disabled': {
            color: darken(ts.colors.labelColor, 0.2),
          },
        },
      },
      MuiFilledInput: {
        root: {
          backgroundColor: ts.colors.backgroundDefault,
          fontSize: '0.875rem',
          lineHeight: '1.2857em',
          borderRadius: ts.borderRadius,
        },
        multiline: {
          paddingTop: '14px',
          paddingBottom: ts.spacingUnit * 2,
        },
        inputMultiline: {
          borderRadius: 0,
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            width: '0px',
          },
        },
        input: {
          padding: ts.spacingUnit * 2,
          fontSize: '1rem',
          lineHeight: '1.2857em',
          borderRadius: ts.borderRadius,
          '&[type=color]': {
            fontSize: '2rem',
            padding: ts.spacingUnit / 2,
          },
        },
        underline: {
          '&:after': {
            borderBottom: 0,
          },
          '&:before, &:hover:before': {
            borderBottom: '0 !important',
          },
          '&.Mui-disabled:before': { borderBottom: 0 },
        },
        adornedEnd: {
          paddingRight: `0 !important`,
        },
        adornedStart: {
          paddingLeft: ts.spacingUnit,
        },
      },
      MuiInputLabel: {
        filled: {
          transform: 'translate(16px, 16px) scale(1)',
          fontSize: '0.875rem',
          lineHeight: '1.2857em',
          color: ts.colors.labelColor,
          '&.MuiInputLabel-shrink': {
            transform: 'translate(16px, 5px) scale(0.57)',
            transformOrigin: 'top left',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '170%',
          },
        },
      },
      MuiFormHelperText: {
        contained: {
          margin: `${ts.spacingUnit / 2}px ${ts.spacingUnit * 2}px 0`,
        },
      },
      MuiFormLabel: {
        root: {
          fontSize: '0.875rem',
          lineHeight: '1.2857em',
          color: ts.colors.textPrimary,
          maxWidth: `calc(100% - ${ts.spacingUnit * 4}px)`,
          paddingRight: ts.spacingUnit * 4,
          '&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error), &:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error) svg':
            {
              color: ts.colors.primary,
            },
        },
      },
      MuiRadio: {
        root: {
          padding: '12px 14px 12px 10px',
          '& svg': {
            fontSize: '1rem',
          },
        },
      },
      MuiCheckbox: {
        root: {
          padding: '12px',
          '& svg': {
            fontSize: '1rem',
          },
        },
      },
      MuiAppBar: {
        root: {
          '&.app-bar-dialog': {
            boxShadow: 'none',
            borderBottom: `1px solid ${ts.colors.backgroundDefault}`,
          },
          '&.app-bar-dialog > div': {
            minHeight: ts.appBarHeight,
            padding: 0,
          },
          '& .dialog-title': {
            flexGrow: 1,
            fontSize: '1rem',
            lineHeight: '1.1875em',
            padding: `0 ${ts.spacingUnit * 2}px`,
            fontWeight: 600,
          },
        },
      },
      MuiIconButton: {
        root: {
          fontSize: '1.25rem',
        },
      },
      MuiSvgIcon: {
        root: {
          fontSize: '1.25rem',
        },
      },
      MuiIcon: {
        root: {
          fontSize: '1.25rem',
        },
      },
      MuiAvatar: {
        root: {
          borderRadius: ts.borderRadius,
        },
      },
      MuiCardContent: {
        root: {
          paddingTop: ts.spacingUnit,
          paddingBottom: ts.spacingUnit,
          paddingLeft: ts.spacingUnit * 2,
          paddingRight: ts.spacingUnit * 2,
        },
      },
      MuiCardHeader: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: ts.spacingUnit * 2,
          paddingRight: ts.spacingUnit * 2,
        },
        action: {
          marginTop: 0,
        },
      },
      MuiBottomNavigation: {
        root: {
          height: ts.footerBarHeight,
          boxShadow: ts.shadows[1],
          backgroundColor: ts.colors.bottomNavigationBackgroundColor,
        },
      },
      MuiBottomNavigationAction: {
        root: {
          minWidth: 50,
          height: ts.footerBarHeight,
          padding: ts.spacingUnit,
          color: ts.colors.bottomNavigationAction,
          '&.MuiBottomNavigationAction-iconOnly': {
            paddingTop: ts.spacingUnit,
          },
          label: {
            color: ts.colors.white,
          },
        },
      },
      MuiTypography: {
        root: {
          overflowWrap: 'break-word',
          '&[href]': {
            textDecoration: 'none',
          },
          '&[href]:hover': {
            color: ts.colors.primaryHover,
          },
          '& .linkify': {
            color: ts.colors.primary,
            textDecoration: 'none',
          },
          '& .linkify:hover': {
            textDecoration: 'underline',
          },
        },
      },
      MuiSpeedDial: {
        root: {
          '& > button:hover': {
            boxShadow: '0 3px 9px 1px rgba(221, 0, 92, 0.82);',
          },
        },
      },
      MuiSpeedDialIcon: {
        icon: {
          fontSize: '1.5em',
        },
      },
      MuiSpeedDialAction: {
        staticTooltipLabel: {
          whiteSpace: 'nowrap',
          cursor: 'pointer',
        },
      },
      MuiTableRow: {
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: ts.colors.backgroundPrimaryLight,
          },
          '&:hover': {
            backgroundColor: ts.colors.backgroundPrimaryLightHover,
          },
          height: ts.spacingUnit * 3,
        },
        head: {
          height: ts.spacingUnit * 4,
        },
      },
      MuiTableCell: {
        root: {
          borderRight: `${ts.spacingUnit / 2}px solid ${ts.colors.white}`,
          paddingLeft: ts.spacingUnit * 2,
          paddingRight: ts.spacingUnit * 2,
          '&:last-child': {
            borderRightWidth: 0,
          },
        },
        head: {
          backgroundColor: ts.colors.backgroundMedium,
          color: ts.colors.white,
          '&:hover': {
            backgroundColor: ts.colors.backgroundMediumHover,
          },
        },
      },
      MuiTab: {
        root: {
          backgroundColor: ts.colors.white,
        },
      },
      MuiModal: {
        root: {
          '& > div:focus': {
            outline: 'none',
          },
        },
      },
      MuiSlider: {
        root: {
          '&.Mui-disabled': {
            color: ts.colors.backgroundMediumHover,
          },
        },
      },
      MuiAutocomplete: {
        root: {
          width: '100%',
          '& .MuiInputLabel-filled': {
            transform: `translate(
              ${ts.spacingUnit * 2}px,
              ${ts.spacingUnit * 3}px
            ) scale(1)`,
          },
          '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
            transform: `translate(
              ${ts.spacingUnit * 2}px,
              ${ts.spacingUnit / 2}px
            ) scale(0.57)`,
          },
        },
        popupIndicator: {
          padding: ts.spacingUnit * 1.5,
        },
        option: {
          paddingTop: 0,
          paddingBottom: 0,
          minHeight: 'auto',
        },
      },
      MuiPickersToolbarButton: {
        toolbarBtn: {
          '& + h3': { marginBottom: '10px' },
        },
      },
    },
  };
}
