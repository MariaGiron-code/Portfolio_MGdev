'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';
export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.qr'), href: '#qr' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const socialLinks = [
    { icon: GitHubIcon, label: 'GitHub', href: 'https://github.com' },
    { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: EmailIcon, label: 'Email', href: 'mailto:marygdev22@gmail.com' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        py: { xs: 5, md: 6 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '1400px', mx: 'auto' }}>
        <Stack spacing={5}>
          {/* Main content */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' },
              gap: 4,
            }}
          >
            {/* Logo & Bio */}
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  component="img"
                  src="/logo.svg"
                  alt="MG Logo"
                  sx={{
                    width: '56px',
                    height: '56px',
                    objectFit: 'contain',
                    flexShrink: 0,
                    filter: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'invert(28%) sepia(89%) saturate(1200%) hue-rotate(258deg) brightness(90%)'
                        : 'brightness(0)',
                  }}
                />
                <Typography sx={{ fontWeight: 700, color: 'text.primary', fontSize: '1rem' }}>
                  mg.dev
                </Typography>
              </Box>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '280px' }}>
                {t('footer.bio')}
              </Typography>
            </Stack>

            {/* Nav Links */}
            <Stack spacing={2}>
              <Stack spacing={1}>
                {navLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s ease',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Stack>

            {/* Social */}
            <Stack spacing={2}>
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'text.secondary',
                  letterSpacing: '0.5px',
                }}
              >
                {t('footer.networks')}
              </Typography>
              <Stack direction="row" spacing={1}>
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <IconButton
                      key={idx}
                      component="a"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      sx={{
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: '6px',
                        color: 'text.secondary',
                        '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <Icon sx={{ fontSize: '1rem' }} />
                    </IconButton>
                  );
                })}
              </Stack>
            </Stack>
          </Box>

          {/* Divider */}
          <Box sx={{ height: '1px', backgroundColor: 'divider' }} />

          {/* Bottom */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem'}}>
              © {currentYear} María Girón · {t('footer.copyright')}.
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
