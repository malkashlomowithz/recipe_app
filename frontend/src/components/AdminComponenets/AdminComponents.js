import React from 'react';
import Users from './Users'
import PremiumUsers from './PremiumUsers'
import PublicationRecipes from './PublicationRecipes'
export default function AdminPage() {
    return (
        <div>
           <Users/> 
           <PremiumUsers/>
           <PublicationRecipes/>
        </div>
    )
}
