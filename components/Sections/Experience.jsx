'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const experienceData = [
  {
    key: 'senior',
    technologies: ['React', 'JavaScript', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    key: 'fullstack',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'MongoDB', 'Prisma'],
  },
];

function ExperienceCard({ item }) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const jobData = t(`experience.jobs.${item.key}`, { returnObjects: true });

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        pb: 4,
        mb: 4,
        borderBottom: '1px solid',
        borderColor: 'divider',
        '&:last-child': {
          borderBottom: 'none',
          mb: 0,
          pb: 0,
        },
      }}
    >
      {/* Timeline Dot */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '40px' }}>
        <Box
          sx={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            backgroundColor: 'primary.main',
            mb: 2,
            mt: 1,
          }}
        />
        <Box
          sx={{
            width: '2px',
            height: '100%',
            backgroundColor: 'divider',
          }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1, pb: 2 }}>
        {/* Header */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
            {jobData.position}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ mb: 2 }}>
            <Typography sx={{ color: 'primary.main', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {jobData.company}
              <Box component="span" sx={{ fontSize: '0.8rem' }}>
                ↗
              </Box>
            </Typography>
            <Box
              sx={{
                borderLeft: '1px solid',
                borderColor: 'divider',
                pl: 1,
              }}
            >
              <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                📍 {jobData.location}
              </Typography>
            </Box>
            <Typography
              sx={{
                backgroundColor: 'primary.main',
                color: '#ffffff',
                px: 1.5,
                py: 0.5,
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                textAlign: 'right',
              }}
            >
              {jobData.period}
            </Typography>
          </Stack>
        </Box>

        {/* Description */}
        <Typography sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.6 }}>
          {jobData.description}
        </Typography>

        {/* Technologies */}
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mb: 3 }}>
          {item.technologies.map((tech, idx) => (
            <Chip
              key={idx}
              label={tech}
              size="small"
              sx={{
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                color: 'text.primary',
                fontWeight: 500,
                fontSize: '0.8rem',
              }}
            />
          ))}
        </Stack>

        {/* Expandable Section */}
        <Button
          onClick={() => setExpanded(!expanded)}
          endIcon={<ExpandMoreIcon sx={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }} />}
          sx={{
            color: 'primary.main',
            textTransform: 'none',
            p: 0,
            mb: expanded ? 2 : 0,
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          {expanded ? t('experience.seeLess') : t('experience.seeMore')}
        </Button>

        {/* Achievements */}
        <Collapse in={expanded}>
          <Box
            sx={{
              backgroundColor: 'rgba(163, 75, 226, 0.05)',
              border: '1px solid',
              borderColor: 'rgba(163, 75, 226, 0.2)',
              borderRadius: '8px',
              p: 3,
              mt: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'primary.main',
                mb: 2,
                letterSpacing: '0.5px',
              }}
            >
              {t('experience.achievements')}
            </Typography>
            <Stack spacing={1.5}>
              {jobData.achievements.map((achievement, idx) => (
                <Box key={idx} sx={{ display: 'flex', gap: 1.5 }}>
                  <Box
                    sx={{
                      color: 'primary.main',
                      fontWeight: 700,
                      fontSize: '1rem',
                      flexShrink: 0,
                    }}
                  >
                    →
                  </Box>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.5, fontSize: '0.95rem' }}>
                    {achievement}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
}

export function Experience() {
  const { t } = useTranslation();

  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto' }}>
        {/* Section Header */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="caption"
            sx={{
              color: 'primary.main',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              display: 'block',
              mb: 1,
            }}
          >
            {t('experience.sectionLabel')}
          </Typography>
          <Typography
            component="h2"
            variant="h2"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 1,
            }}
          >
            {t('experience.title')}
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: '1rem',
            }}
          >
            {t('experience.subtitle')}
          </Typography>
        </Box>

        {/* Experience Items */}
        <Box>
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
