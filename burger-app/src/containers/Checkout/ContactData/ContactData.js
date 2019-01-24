import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Edely Gomes',
                address: {
                    street: 'Rua dos Pintassilgos',
                    zipCode: '42531',
                    country: 'Brazil'
                },
                email: 'test@tesc.com'
            },
            deliveryMethod: 'eas'
        }

        axios.post('/orders.json', order)
            .then(response =>
                this.setState({ loading: false })
            )
            .catch(error =>
                this.setState({ loading: false })
            );
    }

    render() {
        let form = (
            <form>
                <Input inputtype="text" name="name" placeholder="Your name" />
                <Input inputtype="text" name="email" placeholder="Your mail" />
                <Input inputtype="text" name="street" placeholder="Street" />
                <Input inputtype="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;