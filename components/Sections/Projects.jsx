'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { TabButton, ProjectCard } from '@/components/Atoms';

const projectsMeta = [
  {
    id: 'datastream',
    title: 'DataStream API',
    descriptionKey: 'projects.datastream.description',
    image: 'https://picsum.photos/600/400/?random=10',
    architecture: 'Event-driven · Microservices · CQRS',
    interface: 'React + Recharts · Dark Dashboard',
    technologies: ['Node.js', 'Kafka', 'ClickHouse', 'Redis', 'React', 'TypeScript', 'Docker'],
    demo: '#',
    code: '#',
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'shopflow',
    title: 'ShopFlow',
    descriptionKey: 'projects.shopflow.description',
    image: 'https://picsum.photos/600/400/?random=20',
    architecture: 'Monolith → Microservices · BFF · SSR',
    interface: 'Next.js + Tailwind · Component Library',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS S3', 'Prisma'],
    demo: '#',
    code: '#',
    category: 'fullstack',
    featured: false,
  },
  {
    id: 'taskflow',
    title: 'TaskFlow Mobile',
    descriptionKey: 'projects.taskflow.description',
    image: 'https://picsum.photos/600/400/?random=30',
    architecture: 'Offline-first · REST API · Push',
    interface: 'React Native + Expo · Animated UI',
    technologies: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Firebase', 'Redux'],
    demo: '#',
    code: '#',
    category: 'mobile',
    featured: false,
  },
];

export function Projects() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const filterOptions = [
    { id: 'all', label: t('projects.all') },
    { id: 'fullstack', label: t('projects.fullStack') },
    { id: 'frontend', label: t('projects.frontend') },
    { id: 'backend', label: t('projects.backend') },
    { id: 'mobile', label: t('projects.mobile') },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsMeta
      : projectsMeta.filter((p) => p.category === activeFilter);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % filteredProjects.length;
      visible.push(filteredProjects[index]);
    }
    return visible;
  };

  return (
    <Box id="projects" component="section" sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, md: 4 } }}>
      <Box sx={{ width: '100%', maxWidth: '1400px', mx: 'auto' }}>
        <Stack spacing={4}>
          <Box>
            <Typography
              variant="caption"
              sx={{ color: 'primary.main', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', mb: 1 }}
            >
              {t('projects.sectionLabel')}
            </Typography>
            <Typography component="h2" variant="h2" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
              {t('projects.title')}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem' }}>
              {t('projects.subtitle')}
            </Typography>
          </Box>

          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
            {filterOptions.map((option) => (
              <TabButton
                key={option.id}
                label={option.label}
                active={activeFilter === option.id}
                onClick={() => setActiveFilter(option.id)}
              />
            ))}
          </Stack>

          {/* Carousel */}
          <Box sx={{ position: 'relative' }}>
            <Box
              ref={carouselRef}
              sx={{
                display: 'flex',
                gap: 3,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {getVisibleProjects().map((project, idx) => (
                <Box
                  key={`${project.id}-${idx}`}
                  sx={{
                    flex: '0 0 calc(33.333% - 16px)',
                    minWidth: 0,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: idx === 1 ? 1 : 0.6,
                    transform: idx === 1 ? 'scale(1)' : 'scale(0.92)',
                    '@media (max-width: 900px)': {
                      flex: '0 0 100%',
                      opacity: idx === 0 ? 1 : 0,
                      transform: idx === 0 ? 'scale(1)' : 'scale(0.9)',
                      position: idx === 0 ? 'relative' : 'absolute',
                      left: idx === 0 ? 0 : '100%',
                    },
                  }}
                >
                  <ProjectCard
                    {...project}
                    description={t(project.descriptionKey)}
                    architectureLabel={t('projects.architecture')}
                    interfaceLabel={t('projects.interface')}
                  />
                </Box>
              ))}
            </Box>

            {/* Navigation Arrows */}
            <IconButton
              onClick={handlePrev}
              sx={{
                position: 'absolute',
                left: -20,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  borderColor: 'primary.main',
                  color: '#fff',
                },
                zIndex: 2,
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: '1.2rem' }} />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: -20,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  borderColor: 'primary.main',
                  color: '#fff',
                },
                zIndex: 2,
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: '1.2rem' }} />
            </IconButton>
          </Box>

          {/* Dots Indicator */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
            {filteredProjects.map((_, idx) => (
              <Box
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                sx={{
                  width: currentIndex === idx ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: currentIndex === idx ? 'primary.main' : 'divider',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: currentIndex === idx ? 'primary.dark' : 'text.secondary',
                  },
                }}
              />
            ))}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
