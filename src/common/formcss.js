const { default: COLORS } = require("../consts/color");

module.exports = {
    head1: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        fontWeight: '500',
    },
    head2: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
    },
    formgroup: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginVertical: 8,
    },
    label: {
        fontSize: 14,
        color: COLORS.primary,
        marginLeft: 10,
        marginBottom: 3,
    },
    input: {
        backgroundColor: COLORS.grey,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    link: {
        color: COLORS.primary,
        fontSize: 15,
    },
    link2: {
        color: 'grey',
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 10,
    },
    input1: {
        backgroundColor: COLORS.grey,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 100,
        textAlignVertical: 'top',

    },
    errormessage: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: COLORS.primary,
        padding: 5,
        borderRadius: 10,
    },
    bwmessage: {
        color: 'white',
        backgroundColor: 'black',
        fontSize: 15,
        textAlign: 'center',
        padding: 5,
        borderRadius: 5,
    }
}
