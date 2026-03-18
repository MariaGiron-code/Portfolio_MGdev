'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export function LanguageSwitch() {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    handleClose();
  };

  const getLanguageName = () => {
    return i18n.language === 'es' ? 'ES' : 'EN';
  };

  return (
    <>
      <Button
        id="language-button"
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: 'primary.main',
          textTransform: 'uppercase',
          fontWeight: 600,
          fontSize: '0.85rem',
          '&:hover': {
            backgroundColor: 'rgba(163, 75, 226, 0.1)',
          },
        }}
      >
        {getLanguageName()}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => handleLanguageChange('es')}
          selected={i18n.language === 'es'}
          sx={{
            backgroundColor: i18n.language === 'es' ? 'rgba(163, 75, 226, 0.1)' : 'transparent',
          }}
        >
          Español
        </MenuItem>
        <MenuItem
          onClick={() => handleLanguageChange('en')}
          selected={i18n.language === 'en'}
          sx={{
            backgroundColor: i18n.language === 'en' ? 'rgba(163, 75, 226, 0.1)' : 'transparent',
          }}
        >
          English
        </MenuItem>
      </Menu>
    </>
  );
}
