import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';


const {Text, Title} = Typography;
const {Option} = Select;

const News = ({simplified}) => {
  const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory: 'cryptocurrency'})

  return (
    <div>
      Coming soon...
    </div>
  )
}

export default News
