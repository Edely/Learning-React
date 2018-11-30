import React from 'react';
import Aux from '../../hoc/auxiliary';

const layout = (props) => (
    <Aux>
        <div>
            Toolbar, SideDrawe, Backdrop
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;