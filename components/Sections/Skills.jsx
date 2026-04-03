'use client';

import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
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
import { useFetch } from '@/components/hooks/useFetch';

const DataObjectIcon = TypeScriptIcon;

const ICON_MAP = {
  'React': ReactIcon,
  'JavaScript': TypeScriptIcon,
  'Next.js': CodeIcon,
  'Tailwind CSS': AppsIcon,
  'Bootstrap': CodeIcon,
  'Boostrap': CodeIcon,
  'Framer Motion': BuildIcon,
  'Redux / Zustand': DataObjectIcon,
  'Redux': DataObjectIcon,
  'Zustand': DataObjectIcon,
  'Node.js': NodeIcon,
  'Express': CodeIcon,
  'PostgreSQL': DatabaseIcon,
  'MongoDB': DatabaseIcon,
  'REST API': CodeIcon,
  'Docker': DockerIcon,
  'GitHub Actions': GitIcon,
  'Vercel': CloudIcon,
  'Git': GitIcon,
  'VS Code': CodeIcon,
  'Figma': BuildIcon,
  'Linux': CodeIcon,
  'TypeScript': TypeScriptIcon,
  'AWS': CloudIcon,
  'GCP': CloudIcon,
};

const SKILLS_FALLBACK = {
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

function SkeletonGrid() {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: 6 }).map((_, i) => (
        <Grid key={i} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
          <Skeleton variant="rounded" sx={{ height: 96, borderRadius: '8px', bgcolor: 'background.paper' }} />
        </Grid>
      ))}
    </Grid>
  );
}

export function Skills() {
  const { t } = useTranslation();
  const { data, loading, error } = useFetch('/api/skills');
  const [activeTab, setActiveTab] = useState(null);

  const grouped = useMemo(() => {
    if (error) return SKILLS_FALLBACK;
    if (!data || !Array.isArray(data) || data.length === 0) return null;

    return data.reduce((acc, skill) => {
      const cat = skill.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push({ name: skill.name, icon: ICON_MAP[skill.name] ?? CodeIcon });
      return acc;
    }, {});
  }, [data, error]);

  const categories = grouped ? Object.keys(grouped) : [];
  const currentTab = activeTab && categories.includes(activeTab) ? activeTab : categories[0] ?? null;
  const isEmpty = !loading && !error && Array.isArray(data) && data.length === 0;

  return (
    <Box id="skills" component="section" sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, md: 4 } }}>
      <Box sx={{ width: '100%', maxWidth: '1400px', mx: 'auto' }}>
        <Stack spacing={6}>
          {/* Section Header */}
          <Box>
            <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', mb: 1 }}>
              {t('skills.sectionLabel')}
            </Typography>
            <Typography component="h2" variant="h2" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
              {t('skills.title')}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem' }}>
              {t('skills.subtitle')}
            </Typography>
          </Box>

          {loading && <SkeletonGrid />}

          {isEmpty && (
            <Typography sx={{ color: 'text.secondary', textAlign: 'center', py: 4 }}>
              No hay habilidades registradas
            </Typography>
          )}

          {!loading && !isEmpty && grouped && (
            <>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ flexWrap: 'wrap', gap: 1 }}>
                {categories.map((cat) => (
                  <TabButton
                    key={cat}
                    label={t(`skills.${cat}`, cat)}
                    active={currentTab === cat}
                    onClick={() => setActiveTab(cat)}
                  />
                ))}
              </Stack>

              {currentTab && (
                <Grid container spacing={2}>
                  {grouped[currentTab].map((skill) => (
                    <Grid key={skill.name} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                      <SkillCard name={skill.name} icon={skill.icon} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
