import {useEffect, useState} from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setHasVoted } from '../slices/countriesSlice';
import { Box, Button, Grid, InputAdornment, MenuItem, Paper, TextField, Typography } from '@mui/material';
import { MOCK_COUNTRIES } from '../mock';
import type { FormData, TableData } from '../types/types';
import { TEXTS } from '../constants/texts';

const VotingForm: React.FC = () => {
  const [readyToSubmit, setReadyToSubmit] = useState<boolean>(false);
  const { control, handleSubmit, getValues, formState: { errors, isValid, isDirty, dirtyFields } } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      country: "",
    }
  });
  const dispatch = useDispatch();

  const onSubmit = (): void => {
    dispatch(setHasVoted(true));
  };

  useEffect(() => {
    if (isDirty && isValid) {
      setReadyToSubmit(true);
    } else {
      setReadyToSubmit(false);
    }
  }, [isDirty, isValid, dirtyFields, errors, getValues]);

  return (
    <Paper
      sx={{padding: '20px 16px 35px 16px', borderRadius: '20px'}}
    >
      <Typography
        sx={{fontWeight: 700, fontSize:'14px'}}
      >
        { TEXTS.formTitle }
      </Typography>
      <Box
        sx={{display: 'flex', justifyContent: 'space-between', gap: 2, flexDirection: {xs: 'column', lg: 'row'}}}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4}>
              <Controller 
                control={control}
                name="name"
                render={({field, fieldState}) => (
                  <TextField
                    {...field}
                    error={fieldState.invalid}
                    fullWidth
                    helperText={fieldState.error?.message}
                    placeholder={TEXTS.name}
                    margin="dense"
                    name="name"
                    sx={{width: {md: '280px'}}}
                    InputProps={{
                      sx: {height: '38px'},
                    }}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Controller 
                control={control}
                name="email"
                render={({field, fieldState}) => (
                  <TextField
                    {...field}
                    error={fieldState.invalid}
                    fullWidth
                    helperText={fieldState.error?.message}
                    placeholder={TEXTS.email}
                    margin="dense"
                    name="email"
                    type="email"
                    sx={{width: {md: '280px'}}}
                    InputProps={{
                      sx: {height: '38px'},
                      endAdornment: fieldState.invalid ? (
                        <InputAdornment position="end">
                          <img src="/invalid.svg" alt="Invalid icon" />
                        </InputAdornment>
                      ) : null,
                    }}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Controller 
                control={control}
                name="country"
                render={({field, fieldState}) => (
                  <TextField
                    {...field}
                    error={fieldState.invalid}
                    fullWidth
                    helperText={fieldState.error?.message}
                    margin="dense"
                    name="country"
                    sx={{width: {md: '280px'}}}
                    select
                    InputProps={{
                      sx: {height: '38px'},
                    }}
                    SelectProps={{
                      displayEmpty: true,
                      renderValue: (selected) => {
                        if (!selected) {
                          return (
                            <span 
                              style={{ 
                                fontWeight: 500,
                                color: '#cfd1d9', 
                              }}
                            >
                              {TEXTS.country}
                            </span>
                          );
                        }
                        return selected as string;
                      },
                    }}
                  >
                    {MOCK_COUNTRIES?.map((country: TableData) => (
                      <MenuItem key={country.name} value={country.name}>
                        {country.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
                rules={{
                  required: {
                    value: true,
                    message: "Country is required",
                  },
                }}
              />
            </Grid>
          </Grid>
        </form>
        <Box sx={{ display: "flex", width: '125px', height: '38px', padding: '7px 0px' }}>
          <Button 
            disabled={!readyToSubmit}
            onClick={handleSubmit(onSubmit)}
            variant="contained"
          >
            { TEXTS.submitVoteButton }
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default VotingForm;