'use client';

import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import QRCode from 'react-qr-code';
import LinkIcon from '@mui/icons-material/Link';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DownloadIcon from '@mui/icons-material/Download';
import StorageIcon from '@mui/icons-material/Storage';

export function QRGenerator() {
  const { t } = useTranslation();
  const [url, setUrl] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [error, setError] = useState('');
  const qrRef = useRef();

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleGenerateQR = () => {
    if (!url.trim()) {
      setError(t('qr.error'));
      setQrValue('');
      return;
    }

    if (!isValidUrl(url)) {
      setError(t('qr.error'));
      setQrValue('');
      return;
    }

    setQrValue(url);
    setError('');
  };

  const handleDownloadQR = () => {
    if (!qrRef.current) return;
    const canvas = qrRef.current.querySelector('canvas');
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qr-code.png';
    link.click();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGenerateQR();
    }
  };

  return (
    <Box
      id="qr"
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
              {t('qr.sectionLabel')}
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
              {t('qr.title')}
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: '1rem',
              }}
            >
              {t('qr.subtitle')}
            </Typography>
          </Box>

          {/* Main Content - Split Layout */}
          <Grid container spacing={4}>
            {/* Left Column - Configuration (6 cols) */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '12px',
                  p: { xs: 3, md: 4 },
                }}
              >
                <Stack spacing={4}>
                  {/* URL Input Label */}
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <Box sx={{ backgroundColor: 'primary.main', color: '#ffffff', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px' }}>
                        <LinkIcon sx={{ fontSize: '18px' }} />
                      </Box>
                      <Typography sx={{ fontWeight: 600, color: 'text.primary' }}>
                        {t('qr.inputLabel')}
                      </Typography>
                    </Box>
                    <TextField
                      fullWidth
                      placeholder={t('qr.placeholder')}
                      value={url}
                      onChange={(e) => {
                        setUrl(e.target.value);
                        setError('');
                      }}
                      onKeyPress={handleKeyPress}
                      error={!!error}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'background.default',
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                      }}
                    />
                  </Box>

                  {/* Error Message */}
                  {error && <Alert severity="error">{error}</Alert>}

                  {/* Configuration Section */}
                  <Box
                    sx={{
                      backgroundColor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: '8px',
                      p: 2.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'text.secondary',
                        mb: 2,
                        letterSpacing: '0.5px',
                      }}
                    >
                      {t('qr.config')}
                    </Typography>
                    <Stack spacing={2}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                          {t('qr.size')}
                        </Typography>
                        <Typography sx={{ color: 'text.primary', fontWeight: 600, fontFamily: 'monospace' }}>
                          256 × 256 px
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                          {t('qr.format')}
                        </Typography>
                        <Typography sx={{ color: 'text.primary', fontWeight: 600, fontFamily: 'monospace' }}>
                          PNG
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                          {t('qr.errorCorrection')}
                        </Typography>
                        <Typography sx={{ color: 'text.primary', fontWeight: 600, fontFamily: 'monospace' }}>
                          Level H (30%)
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>

                  {/* Info Text */}
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                    {t('qr.info')}
                  </Typography>

                  {/* Generate Button */}
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleGenerateQR}
                    fullWidth
                    sx={{
                      backgroundColor: 'primary.main',
                      color: '#ffffff',
                      fontWeight: 600,
                      textTransform: 'none',
                      py: 2,
                      fontSize: '1rem',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                    }}
                    startIcon={<PhoneAndroidIcon />}
                  >
                    {t('qr.generateBtn')}
                  </Button>
                </Stack>
              </Box>
            </Grid>

            {/* Right Column - Preview (6 cols) */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '12px',
                  p: { xs: 3, md: 4 },
                  minHeight: '450px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {qrValue ? (
                  <Stack spacing={3} sx={{ alignItems: 'center', width: '100%' }}>
                    <Box
                      ref={qrRef}
                      sx={{
                        p: 2,
                        backgroundColor: '#ffffff',
                        border: '1px dashed',
                        borderColor: 'primary.main',
                        borderRadius: '8px',
                      }}
                    >
                      <QRCode value={qrValue} size={256} level="H" includeMargin={true} />
                    </Box>

                    <Button
                      variant="contained"
                      onClick={handleDownloadQR}
                      sx={{
                        backgroundColor: 'primary.main',
                        color: '#ffffff',
                        fontWeight: 600,
                        textTransform: 'none',
                        px: 4,
                        py: 1.5,
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                        },
                      }}
                      startIcon={<DownloadIcon />}
                    >
                      {t('qr.downloadBtn')}
                    </Button>
                  </Stack>
                ) : (
                  <Box sx={{ textAlign: 'center' }}>
                    <StorageIcon sx={{ fontSize: '3rem', mb: 2, opacity: 0.5, color: 'text.secondary' }} />
                    <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {t('qr.enterUrl')}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
}
