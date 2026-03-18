'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import ReactIcon from '@mui/icons-material/FavoriteBorder';
import TypeScriptIcon from '@mui/icons-material/DataObject';
import NodeIcon from '@mui/icons-material/StorageRounded';
import DatabaseIcon from '@mui/icons-material/Storage';
import DockerIcon from '@mui/icons-material/Inventory2';
import GitIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import BuildIcon from '@mui/icons-material/BuildCircle';
import AppsIcon from '@mui/icons-material/Apps';
import { TabButton, SkillCard } from '@/components/Atoms';

// Icon alias
const DataObjectIcon = TypeScriptIcon;

const skillsData = {
  frontend: [
    { name: 'React', icon: ReactIcon },
    { name: 'JavaScript', icon: TypeScriptIcon },
    { name: 'Next.js', icon: CodeIcon },
    { name: 'Tailwind CSS', icon: AppsIcon },
    { name: 'Boostrap', icon: CodeIcon },
    { name: 'Framer Motion', icon: BuildIcon },
  ],
  backend: [
    { name: 'Redux / Zustand', icon: DataObjectIcon },
    { name: 'Node.js', icon: NodeIcon },
    { name: 'Express', icon: CodeIcon },
    { name: 'PostgreSQL', icon: DatabaseIcon },
    { name: 'MongoDB', icon: DatabaseIcon },
  ],
  database: [
    { name: 'PostgreSQL', icon: DatabaseIcon },
    { name: 'MongoDB', icon: DatabaseIcon },
    { name: 'REST API', icon: CodeIcon },
  ],
  devops: [
    { name: 'Docker', icon: DockerIcon },
    { name: 'GitHub Actions', icon: GitIcon },
    { name: 'Vercel', icon: CloudIcon },
  ],
  tools: [
    { name: 'Git', icon: GitIcon },
    { name: 'VS Code', icon: CodeIcon },
    { name: 'Figma', icon: BuildIcon },
    { name: 'Linux', icon: CodeIcon },
  ],
};

export function Skills() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    { id: 'frontend', label: t('skills.frontend') },
    { id: 'backend', label: t('skills.backend') },
    { id: 'database', label: t('skills.database') },
    { id: 'devops', label: t('skills.devops') },
    { id: 'tools', label: t('skills.tools') },
  ];

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '1400px', mx: 'auto' }}>
        <Stack spacing={6}>
          {/* Section Header */}
          <Box>
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
              {t('skills.sectionLabel')}
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
              {t('skills.title')}
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: '1rem',
              }}
            >
              {t('skills.subtitle')}
            </Typography>
          </Box>

          {/* Category Tabs */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ flexWrap: 'wrap', gap: 1 }}>
            {categories.map((cat) => (
              <TabButton
                key={cat.id}
                label={cat.label}
                active={activeTab === cat.id}
                onClick={() => setActiveTab(cat.id)}
              />
            ))}
          </Stack>

          {/* Skills Grid */}
          <Grid container spacing={2}>
            {skillsData[activeTab].map((skill, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <SkillCard
                  name={skill.name}
                  icon={skill.icon}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
}
