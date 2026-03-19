'use client';

import { useEffect, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Badge, KPIBlock } from '@/components/Atoms';

const ROLES = ['Full Stack Junior Developer', 'React Developer', 'Node.js'];
const TYPE_SPEED = 80;
const DELETE_SPEED = 50;
const PAUSE_MS = 1800;

const initialTypewriterState = {
  displayed: '',
  roleIdx: 0,
  isDeleting: false,
};

function typewriterReducer(state, action) {
  const current = ROLES[state.roleIdx];
  switch (action.type) {
    case 'TYPE':
      return { ...state, displayed: current.slice(0, state.displayed.length + 1) };
    case 'START_DELETE':
      return { ...state, isDeleting: true };
    case 'DELETE':
      return { ...state, displayed: current.slice(0, state.displayed.length - 1) };
    case 'NEXT_ROLE':
      return { displayed: '', roleIdx: (state.roleIdx + 1) % ROLES.length, isDeleting: false };
    default:
      return state;
  }
}

function TypewriterRole() {
  const [state, dispatch] = useReducer(typewriterReducer, initialTypewriterState);
  const { displayed, roleIdx, isDeleting } = state;
  const current = ROLES[roleIdx];

  useEffect(() => {
    let timeout;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => dispatch({ type: 'TYPE' }), TYPE_SPEED);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => dispatch({ type: 'START_DELETE' }), PAUSE_MS);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => dispatch({ type: 'DELETE' }), DELETE_SPEED);
    } else if (isDeleting && displayed.length === 0) {
      dispatch({ type: 'NEXT_ROLE' });
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, current]);

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        fontFamily: '"Geist Mono", "Courier New", monospace',
        fontSize: { xs: '1rem', md: '1.15rem' },
        color: 'primary.main',
        fontWeight: 600,
      }}
    >
      <Box component="span" sx={{ opacity: 0.7 }}>{'>'}_</Box>
      <Box component="span">{displayed}</Box>
      <Box
        component="span"
        sx={{
          display: 'inline-block',
          width: '2px',
          height: '1.1em',
          backgroundColor: 'primary.main',
          animation: 'blink 1s step-end infinite',
          '@keyframes blink': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
          },
        }}
      />
    </Box>
  );
}

export function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '1400px' }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Box>
                <Badge label={t('hero.available')} variant="ghost" size="sm" />
              </Box>

              <Box>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', fontWeight: 400 }}>
                  {t('hero.greeting')}
                </Typography>
              </Box>

              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  fontWeight: 700,
                  color: 'text.primary',
                  lineHeight: 1.2,
                  mt: '0 !important',
                }}
              >
                María Girón
              </Typography>

              <TypewriterRole />

              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  maxWidth: '500px',
                }}
              >
                {t('hero.description')}
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<EmailIcon />}
                  onClick={() => scrollToSection('contact')}
                  sx={{
                    backgroundColor: 'primary.main',
                    color: '#ffffff',
                    px: 3,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: '8px',
                    '&:hover': { backgroundColor: 'primary.dark', transform: 'translateY(-2px)' },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {t('hero.contactMe')}
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => scrollToSection('projects')}
                  sx={{
                    borderColor: 'divider',
                    color: 'text.primary',
                    px: 3,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: '8px',
                    '&:hover': { borderColor: 'primary.main', backgroundColor: 'rgba(163, 75, 226, 0.05)' },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {t('hero.viewProjects')}
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<CloudDownloadIcon />}
                  sx={{
                    borderColor: 'divider',
                    color: 'text.primary',
                    px: 3,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: '8px',
                    '&:hover': { borderColor: 'primary.main', backgroundColor: 'rgba(163, 75, 226, 0.05)' },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {t('hero.downloadCV')}
                </Button>
              </Stack>

              {/* Social Icons */}
              <Stack direction="row" spacing={1.5}>
                {[
                  { icon: GitHubIcon, href: 'https://github.com/MariaGiron-code' },
                  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/%20maria-gir%C3%B3n-671920207' },
                  { icon: EmailIcon, href: 'mailto:marygdev22@gmail.com' },
                ].map(({ icon: Icon, href }, i) => (
                  <IconButton
                    key={i}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: '8px',
                      color: 'text.secondary',
                      '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
                    }}
                  >
                    <Icon />
                  </IconButton>
                ))}
              </Stack>

              {/* KPIs */}
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={6} sm={4}>
                  <KPIBlock value="+5" label="YRS EXP." />
                </Grid>
                <Grid item xs={6} sm={4}>
                  <KPIBlock value="30+" label="PROJECTS" />
                </Grid>
                <Grid item xs={6} sm={4}>
                  <KPIBlock value="12+" label="CLIENTS" />
                </Grid>
              </Grid>
            </Stack>
          </Grid>

          {/* Right Column - Code Editor */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '12px',
                overflow: 'hidden',
                aspectRatio: '16 / 10',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                src="https://picsum.photos/600/400/?random=1"
                alt="Code Editor"
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Scroll Indicator */}
        <Box
          sx={{
            mt: 8,
            textAlign: 'center',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(10px)' },
            },
          }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
            SCROLL
          </Typography>
          <IconButton
            onClick={() => scrollToSection('skills')}
            sx={{ color: 'primary.main' }}
          >
            <ArrowDownwardIcon sx={{ fontSize: '1.5rem' }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
