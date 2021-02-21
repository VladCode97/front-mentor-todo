import React, {useRef} from 'react';
import {ButtonTask, InputTask, InputTaskContainer} from "../../../styles/Task-style";

export const InputTaskComponent = () => {
    const task: Array<string> = [];
    /**
     * Ref input
     */
    const refInputTask = useRef<any>(null);
    /**
     * save task
     */
    const handleTask = (): void => {
        if (refInputTask.current) {
            task.push(refInputTask.current.value);
            refInputTask.current.value = "";
            console.log(task)
        }
    }

    return (
        <InputTaskContainer>
            <ButtonTask onClick={handleTask}/>
            <InputTask ref={refInputTask} placeholder={'current typing'}/>
        </InputTaskContainer>
    )
}
