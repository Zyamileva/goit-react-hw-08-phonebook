export const paperMainStyle = photo => ({
  position: 'relative',
  backgroundColor: 'grey',
  color: '#fff',
  mb: 4,
  mt: 10,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  backgroundImage: `url(${photo})`,
  minHeight: 450,
});

export const boxMainStyle = {
  position: 'relative',
  p: { xs: 3, md: 6 },
  pr: { md: 0 },
};

export const boxContactsStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  bgcolor: 'rgba(145, 185, 229, 0.15)',
  mx: 'auto',
  borderRadius: 3,
  maxWidth: 700,
  px: 5,
  marginTop: 15,
};
