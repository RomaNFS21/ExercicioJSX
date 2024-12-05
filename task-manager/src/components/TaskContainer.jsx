import React from 'react';

function TaskContainer() {
    return (
        <React.Fragment>
            <div className="task">
                <h3>Varrer a casa</h3>
                <p>Passar a vassoura na casa e juntar toda a poeira</p>
            </div>
            <div className="task">
                <h3>Passar pano</h3>
                <p>Com um balde d'àgua, um rodo e um pano, passar o pano molhado em todas as areas da casa que foi tirado a poeira</p>
            </div >
            <div className="task">
                <h3> Recolher roupas sujas </h3>
                <p> Coletar as roupas sujas nos cestos de roupa pela casa</p>
            </div>
            <div className="task"> 
                <h3> Lavar a roupa suja </h3>
                <p> Colocara a roupa suja coletada na maquina de lavar </p>
            </div>
        </React.Fragment>
    );
}
export default TaskContainer;