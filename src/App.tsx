import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import SuccessAlert from './components/SuccessAlert';
import VotingForm from "./components/VotingForm";
import CountryTable from "./components/CountryTable";
import SearchBar from "./components/SearchBar";
import { Box, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, selectFilteredCountries, setHasVoted } from "./slices/countriesSlice";
import { RootState } from './store/store';
import { TEXTS } from './constants/texts';

const App: React.FC = () => {
  const [searchQuery, setSearchQueryLocal] = useState<string>('');
  const dispatch = useDispatch();
  const countries = useSelector((state: RootState) => selectFilteredCountries(state));
  const hasVoted = useSelector((state: RootState) => state.countries.hasVoted);

  const handleSearchChange = (query: string): void => {
    setSearchQueryLocal(query);
    dispatch(setSearchQuery(query));
  };

  useEffect(() => {
    if (hasVoted) {
      const timer = setTimeout(() => {
        dispatch(setHasVoted(false));
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [hasVoted, dispatch]);

  return (
    <Layout>
      <Container
        disableGutters 
        sx={{maxWidth: '1062px', padding: 0}}
      >
        {hasVoted ? (
          <SuccessAlert />
        ) : (
          <VotingForm />
        )}
        <Typography
          sx={{
            mt: 5,
            mb: 1,
            fontSize: {xs: '22px', sm: '25px', md:'32px'},
            fontWeight: 700,
            lineHeight: '24px',
          }}
        >
          {TEXTS.title}
        </Typography>
        <Box
          sx={{width: {xs: '100%', sm: '100%', md:'417px'}, mb: 3}}
        >
          <SearchBar 
            searchQuery={searchQuery} 
            onSearchChange={handleSearchChange} 
            placeholder={TEXTS.searchBarPlaceholder}
          />
        </Box>
      </Container>
      <CountryTable 
        data={countries} 
        columns={['Country', 'Capital City', 'Region', 'Sub Region', 'Weather', 'Votes']} 
      />
    </Layout>
  );
};

export default App;
