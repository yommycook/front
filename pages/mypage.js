import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const MyPage = () => {
    return (
        <>
            <Head>
                <title>마이페이지|요미</title>
            </Head>
            <AppLayout>
                <div>마이 페이지</div>
            </AppLayout>
        </>
    );
};

export default MyPage;
