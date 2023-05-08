import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/reset.css';
import React, { useState } from 'react';
import { Typography, Input, Avatar, Button } from 'antd';

const { Title } = Typography;

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>요미</title>
            </Head>
            <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                <Title>요미</Title>
            </div>
            <div
                style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '30px',
                    marginRight: '30px',
                }}
            >
                <Input.Search />
            </div>
            <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                <Avatar
                    style={{ backgroundColor: 'slateblue', verticalAlign: 'middle' }}
                    size='large'
                >
                    지니
                </Avatar>
                <Button
                    size='small'
                    style={{ margin: '0 16px', verticalAlign: 'middle' }}
                >
                    로그아웃
                </Button>
            </div>
            <Component />
        </>
    );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default App;
