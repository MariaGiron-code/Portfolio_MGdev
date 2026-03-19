'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import StorageIcon from '@mui/icons-material/Storage';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';

export function ProjectCard({
  title,
  description,
  image,
  architecture,
  interface: interfaceStack,
  architectureLabel = 'ARCHITECTURE',
  interfaceLabel = 'INTERFACE',
  technologies,
  demo,
  code,
  featured = false,
  category,
}) {
  const categoryLabel = category ? category.toUpperCase().replace('FULLSTACK', 'FULLSTACK').replace('FRONTEND', 'FRONTEND').replace('BACKEND', 'BACKEND').replace('MOBILE', 'MOBILE') : null;

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease',
        height: '100%',
        maxHeight: '580px',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': { borderColor: 'primary.main' },
      }}
    >
      {/* Image */}
      <Box sx={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden', backgroundColor: 'background.default', flexShrink: 0 }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Badges overlay */}
        <Box sx={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 1 }}>
          {featured && (
            <Box
              sx={{
                backgroundColor: 'primary.main',
                color: '#fff',
                fontSize: '0.7rem',
                fontWeight: 700,
                px: 1.5,
                py: 0.5,
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              ★ Featured
            </Box>
          )}
        </Box>
        {categoryLabel && (
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              backgroundColor: 'rgba(0,0,0,0.7)',
              color: 'text.secondary',
              fontSize: '0.65rem',
              fontWeight: 700,
              px: 1.5,
              py: 0.5,
              borderRadius: '4px',
              letterSpacing: '0.5px',
            }}
          >
            {categoryLabel}
          </Box>
        )}
      </Box>

      {/* Content */}
      <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flex: 1, gap: 1.5, minHeight: 0, overflow: 'hidden' }}>
        <Typography component="h3" sx={{ fontWeight: 700, color: 'text.primary', fontSize: '1.1rem', lineHeight: 1.3 }}>
          {title}
        </Typography>

        <Typography sx={{ color: 'text.secondary', lineHeight: 1.5, fontSize: '0.85rem', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
          {description}
        </Typography>

        {/* Architecture & Interface blocks */}
        {(architecture || interfaceStack) && (
          <Stack spacing={0.75}>
            {architecture && (
              <Box
                sx={{
                  backgroundColor: 'background.default',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '6px',
                  p: 1.25,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.75 }}>
                  <StorageIcon sx={{ fontSize: '0.85rem', color: 'primary.main' }} />
                  <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'text.secondary', letterSpacing: '0.5px' }}>
                    {architectureLabel}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: '0.82rem', color: 'text.primary', fontWeight: 500 }}>
                  {architecture}
                </Typography>
              </Box>
            )}
            {interfaceStack && (
              <Box
                sx={{
                  backgroundColor: 'background.default',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '6px',
                  p: 1.25,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.75 }}>
                  <DesktopWindowsIcon sx={{ fontSize: '0.85rem', color: 'primary.main' }} />
                  <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'text.secondary', letterSpacing: '0.5px' }}>
                    {interfaceLabel}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: '0.82rem', color: 'text.primary', fontWeight: 500 }}>
                  {interfaceStack}
                </Typography>
              </Box>
            )}
          </Stack>
        )}

        {/* Technologies */}
        {technologies && (
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.75 }}>
            {technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: 'background.default',
                  border: '1px solid',
                  borderColor: 'divider',
                  color: 'text.secondary',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  height: '22px',
                }}
              />
            ))}
          </Stack>
        )}

        {/* Action Buttons */}
        <Stack direction="row" spacing={1.5} sx={{ mt: 'auto', pt: 1 }}>
          {demo && (
            <Button
              component="a"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="small"
              startIcon={<OpenInNewIcon sx={{ fontSize: '0.85rem !important' }} />}
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.82rem',
                px: 1.5,
                py: 0.5,
                '&:hover': { backgroundColor: 'rgba(163, 75, 226, 0.08)' },
              }}
            >
              Demo
            </Button>
          )}
          {code && (
            <Button
              component="a"
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              variant="text"
              size="small"
              startIcon={<CodeIcon sx={{ fontSize: '0.85rem !important' }} />}
              sx={{
                color: 'text.secondary',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.82rem',
                px: 1.5,
                py: 0.5,
                '&:hover': { color: 'primary.main', backgroundColor: 'transparent' },
              }}
            >
              Code
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
