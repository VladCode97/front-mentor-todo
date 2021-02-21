import React from 'react';
import {HomeBackground, HomeContainer, HomeLayout, TitleHome} from "../../styles/home-style";
import {InputTaskComponent} from "../task/input-task/input-task-component";
import {ListListComponent} from "../task/list-task/list-task-component";

export const HomeComponent = () => {
    return (
        <HomeContainer>
            <HomeBackground>
                <TitleHome>TODO</TitleHome>
            </HomeBackground>
            <HomeLayout>
                <InputTaskComponent/>
                <ListListComponent/>
            </HomeLayout>
        </HomeContainer>
    )
}
