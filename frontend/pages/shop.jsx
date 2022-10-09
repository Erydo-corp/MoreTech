import React from "react";
import Box from '@mui/material/Box';
import BlockSales from "../components/Marketplase/BlockSales";
import BlockSearch from "../components/Marketplase/BlockSearch";
import { BlockGoods } from "../components/Marketplase/BlockGoods";
import HomePages from "./home";

const MarketPlase = () => {
  return (
    <HomePages>
      <Box sx={{ width: 1, paddingTop: '64px', paddingBottom: '30px' }}>
        <BlockSales />
        <BlockSearch />
        <BlockGoods />
      </Box>
    </HomePages>    
  );
};

export default MarketPlase;