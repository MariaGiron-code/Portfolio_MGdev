'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const LocationIcon = LocationOnIcon;

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
      setLoading(false);
    }, 1000);
  };

  const socialLinks = [
    { icon: GitHubIcon, label: 'GitHub', href: 'https://github.com' },
    { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: WhatsAppIcon, label: 'WhatsApp', href: 'https://wa.me/593960702845' },
  ];  return (
    <Box
      id="contact"
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
              {t('contact.sectionLabel')}
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
              {t('contact.title')}
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: '1rem',
              }}
            >
              {t('contact.subtitle')}
            </Typography>
          </Box>

          {/* Main Content - Horizontal Single Row Layout */}
          <Box
            sx={{
              backgroundColor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '12px',
              p: { xs: 3, md: 4 },
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 4, md: 6 },
            }}
          >
            {/* Left Side - Contact Info */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Stack spacing={3}>
                {/* Contact Information */}
                <Box>
                  <Typography sx={{ fontWeight: 700, color: 'text.primary', mb: 3, fontSize: '1.2rem' }}>
                    {t('contact.contactInfo')}
                  </Typography>

                  <Stack spacing={3}>
                    {/* Email */}
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Box
                        sx={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: 'background.default',
                          border: '1px solid',
                          borderColor: 'divider',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: 'primary.main',
                        }}
                      >
                        <EmailIcon />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', fontWeight: 600, mb: 0.5 }}>
                          {t('contact.emailLabel')}
                        </Typography>
                        <Typography sx={{ color: 'primary.main', fontWeight: 600 }}>
                          marygdev22@gmail.com
                        </Typography>
                      </Box>
                    </Box>

                    {/* Location */}
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Box
                        sx={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: 'background.default',
                          border: '1px solid',
                          borderColor: 'divider',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: 'primary.main',
                        }}
                      >
                        <LocationIcon />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', fontWeight: 600, mb: 0.5 }}>
                          {t('contact.locationLabel')}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>
                          Quito - Pichincha · Ecuador
                        </Typography>
                      </Box>
                    </Box>

                    {/* Response Time */}
                    <Box
                      sx={{
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid',
                        borderColor: 'rgba(16, 185, 129, 0.3)',
                        borderRadius: '8px',
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Box sx={{ color: 'success.main', fontSize: '1rem' }}>●</Box>
                      <Typography sx={{ color: 'text.primary', fontWeight: 600, fontSize: '0.9rem' }}>
                        {t('contact.responseTime')}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>

                {/* Social Links */}
                <Box>
                  <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: 'text.secondary', mb: 2, textTransform: 'uppercase' }}>
                    {t('contact.networks')}
                  </Typography>
                  <Stack direction="row" spacing={1.5}>
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <IconButton
                          key={social.label}
                          component="a"
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: '8px',
                            color: 'text.secondary',
                            '&:hover': {
                              borderColor: 'primary.main',
                              color: 'primary.main',
                            },
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <Icon />
                        </IconButton>
                      );
                    })}
                  </Stack>
                </Box>
              </Stack>
            </Box>

            {/* Vertical Divider */}
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                width: '1px',
                backgroundColor: 'divider',
                alignSelf: 'stretch',
              }}
            />

            {/* Right Side - Contact Form */}
            <Box sx={{ flex: 1 }}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  {/* Status Messages */}
                  {submitStatus === 'success' && <Alert severity="success">{t('contact.successMessage')}</Alert>}
                  {submitStatus === 'error' && <Alert severity="error">{t('contact.errorMessage')}</Alert>}

                  {/* Name Field */}
                  <Box>
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: 'text.secondary', mb: 1, textTransform: 'uppercase' }}>
                      {t('contact.nameField')}
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Ana Martínez"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      required
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

                  {/* Email Field */}
                  <Box>
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: 'text.secondary', mb: 1, textTransform: 'uppercase' }}>
                      {t('contact.emailField')}
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="maria@gmail.com"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      required
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

                  {/* Subject Field */}
                  <Box>
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: 'text.secondary', mb: 1, textTransform: 'uppercase' }}>
                      {t('contact.subjectField')}
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="APP web"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
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

                  {/* Message Field */}
                  <Box>
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: 'text.secondary', mb: 1, textTransform: 'uppercase' }}>
                      {t('contact.messageField')}
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder={t('contact.messagePlaceholder')}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      multiline
                      rows={4}
                      required
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

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
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
                      '&:disabled': {
                        opacity: 0.7,
                      },
                    }}
                    startIcon={<SendIcon />}
                  >
                    {loading ? t('contact.sending') : t('contact.send')}
                  </Button>
                </Stack>
              </form>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
