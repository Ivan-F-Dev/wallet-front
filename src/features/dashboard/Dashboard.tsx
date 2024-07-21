import React, { useState, useEffect } from 'react';
import {api} from "../../services/api";

interface Expense {
    id: number;
    amount: number;
    description: string;
    created_at: string;
}

function Dashboard() {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        api.get('expenses/1').then(res => {
            setExpenses(res.data);
        }).catch(error => {
            console.error('There was an error fetching the expenses!', error);
        });
    }, []);

    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api.post('expenses', { userId: 1, amount, description }).then(response => {
            setExpenses([...expenses, response.data]);
            setAmount('');
            setDescription('');
        }).catch(error => {
            console.error('There was an error adding the expense!', error);
        });
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Amount</label>
                    <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit">Add Expense</button>
            </form>
            <ul>
                {expenses.map(expense => (
                    <li key={expense.id}>{expense.amount} - {expense.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard