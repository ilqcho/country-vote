export interface TableData {
    name: string;
    capital_city: string;
    region: string;
    sub_region: string;
    votes: number;
  }

  export interface FormData {
    name: string;
    email: string;
    country: string;
  }
  
  /*export interface Country {
    name: string;
    official_name: string;
    capital_city: string;
    region: string;
    sub_region: string;
    votes: number;
  }*/
  

  //Props
  export interface CountryTableProps {
    data: TableData[];
    columns: string[];
  }

  export interface LayoutProps {
    children: React.ReactNode;
  }

  export interface SearchBarProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
    placeholder: string;
  }

  export interface CountriesState {
    countries: TableData[];
    searchQuery: string;
    hasVoted: boolean;
  }