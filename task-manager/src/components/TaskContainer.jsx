import React from 'react';
import Task from './Task';

function TaskContainer() {
    const tasks = [
        { id: 1, title: 'Varrer a casa', description: 'Passar a vassoura na casa e juntar toda a poeira' },
        { id: 2, title: 'Passar pano', description: "Com um balde d'àgua, um rodo e um pano, passar o pano molhado em todas as areas da casa que foi tirado a poeira" },
        { id: 3, title: 'Recolher roupas sujas', description: 'Coletar as roupas sujas nos cestos de roupa pela casa' },
        { id: 4, title: 'Lavar a roupa suja', description: 'Colocara a roupa suja coletada na maquina de lavar' },
    ];
    return (
        <div>
            {tasks.map((task) => (
                <Task id={task.id} title={task.title} description={task.description} />
            ))}
        </div>
    );
}
export default TaskContainer;