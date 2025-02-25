import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { LanguageOutlined } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Languages: Record<string, string> = {
    ar: "Arabic",
    en: "English"
};

export default function LanguageMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const { t, i18n } = useTranslation();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (lang?: string) => {
        if (lang) {
            i18n.changeLanguage(lang);
            document.getElementsByTagName("html")[0].setAttribute("dir", i18n.dir());

        }
        setAnchorEl(null);
    };

    return (
        <div>
            <Tooltip title={t("changeLang")}>
                <IconButton
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <LanguageOutlined />
                </IconButton>
            </Tooltip>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
                TransitionComponent={Fade}
            >
                {["ar", "en"].map((lang) => (
                    <MenuItem
                        key={lang}
                        onClick={() => handleClose(lang)}
                        sx={{ background: (theme) => i18n.language === lang ? theme.palette.divider : "" }}
                    >
                        {Languages[lang] || lang}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
