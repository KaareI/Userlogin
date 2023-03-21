import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";

import styles from "./Error.module.css"

const BackDrop = (props) =>{
    <div className={styles.backdrop} onClick={props.onConfirm}/>

}

const ModalOverlay = (props) =>{
    return(
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.footer}>
                <Button onClick={props.onConfirm}>OK</Button>
            </footer>
        </Card>
    )
}
const Error = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <BackDrop onConfirm={props.onConfirm}/>,
                document.getElementById('backDrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                title={props.title}
                message={props.message}
                onConfirm={props.onConfirm}/>,
                document.getElementById('overlay-root')
            )}
        </Fragment>
    )
}
export default Error