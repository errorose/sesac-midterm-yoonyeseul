const TodoModel = (sequelize, DataTypes)=>{
    const Todo = sequelize.define(
        'Todo',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            done: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        },
        {
            freezeTableName: true,
            timestamps: true,
        }
    );
    return Todo;
}

module.exports = TodoModel;