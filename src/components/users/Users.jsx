const Users = ({ users }) => {
	if (!users || users.length === 0) return <p>No hay usuarios</p>;

	return (
		<>
			{users.map(user => (
				<div key={user.userId}>
					<p>
						{user.name} {user.active ? 'Active' : 'Inactive'}
					</p>
				</div>
			))}
		</>
	);
};

export default Users;
