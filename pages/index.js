import React from 'react'; //안 써도 상관 없음! (Next에서는 걍 실행 가능! pages라는 디렉토리를 알아본당)
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import Add from '../components/add';
import CardBoard from '../components/cardboard';

const Home = () => {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>요미|나의 레시피</title>
            </Head>
            <AppLayout>
                <Add />
                <div
                    style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        margin: '3ㄴ0px',
                    }}
                >
                    <CardBoard />
                </div>
                <div
                    style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        margin: '30px',
                    }}
                >
                    <CardBoard />
                </div>
                <div
                    style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        margin: '30px',
                    }}
                >
                    <CardBoard />
                </div>
            </AppLayout>
        </>
    );
};

export default Home;
