export const Data = {
    menus: [{
            header: true,
            name: 'Dashboard'
        },
        {
            name: 'Dashboard',
            icon: 'fas fa-fire',
            url: '/dashboard/general',
        },
        {
            header: true,
            name: 'Transactions'
        },
        {
            name: 'Add New Transaction',
            icon: 'far fa-square',
            url: "/transactions/addtransaction"

        },
        {
            name: 'View Transactions',
            icon: 'fas fa-th',
            url: "/transactions/mytransactions"

        },
        {
            header: true,
            name: 'Friends'
        },
        {
            name: 'Add New Friend',
            icon: 'fas fa-pencil-ruler',
            url: "/friends/addfriend"
        },
        {
            name: 'My Friends',
            icon: 'fas fa-ellipsis-h',
            url: "/friends/myfriends"
        },
        
        {
            header: true,
            name: 'Logout'
        },
        {
            name: 'Logout',
            icon: 'far fa-user',
            url: "/logout"
        },
    ]
};