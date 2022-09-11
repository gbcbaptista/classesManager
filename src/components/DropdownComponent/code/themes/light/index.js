import {
    StyleSheet
} from 'react-native';

import Colors from '../../constants/colors';

export const ICONS = {
    ARROW_DOWN: require('./icons/arrow-down.png'),
    ARROW_UP: require('./icons/arrow-up.png'),
    TICK: require('./icons/tick.png'),
    CLOSE: require('./icons/close.png')
};

export default StyleSheet.create({
    container: {
        flex: 1,
        flexBasis: 'auto',
        paddingHorizontal: 5,
        marginHorizontal: 5,
        fontSize: 18,
    },
    style: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        minHeight: 40,
        fontSize: 18,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.WHITE,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: Colors.WHITE
    },
    label: {
        flex: 1,
        color: Colors.BLACK,
        fontSize: 18,
    },
    labelContainer: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 18,
    },
    arrowIcon: {
        width: 20,
        height: 20
    },
    tickIcon: {
        width: 20,
        height: 20
    },
    closeIcon: {
        width: 30,
        height: 30
    },
    badgeStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.ALTO,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 18,
    },
    badgeDotStyle: {
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        marginRight: 8,
        backgroundColor: Colors.GREY
    },
    badgeSeparator: {
        width: 5,
    },
    listBody: {
        height: '100%',
        fontSize: 18,
    },
    listBodyContainer: {
        flexGrow: 1,
        alignItems: 'center',
        paddingHorizontal: 5,
        marginHorizontal: 5,
        fontSize: 18,
    },
    dropDownContainer: {
        paddingHorizontal: 5,
        marginHorizontal: 5,
        position: 'absolute',
        backgroundColor: "#F8F8F8",
        borderRadius: 8,
        borderColor: Colors.WHITE,
        borderWidth: 1,
        width: '100%',
        overflow: 'hidden',
        zIndex: 1000,
        fontSize: 18,
    },
    modalContentContainer: {
        flexGrow: 1,
        fontSize: 18,
    },
    listItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 40,
        fontSize: 18,
    },
    listItemLabel: {
        flex: 1,
        color: Colors.BLACK,
        fontSize: 18,
    },
    iconContainer: {
        marginRight: 10
    },
    arrowIconContainer: {
        marginLeft: 10
    },
    tickIconContainer: {
        marginLeft: 10
    },
    closeIconContainer: {
        marginLeft: 10
    },
    listParentLabel: {

    },
    listChildLabel: {
        fontSize: 18,
    },
    listParentContainer: {

    },
    listChildContainer: {
        paddingLeft: 40,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: Colors.BLACK,
        borderBottomWidth: 1
    },
    searchTextInput: {
        flexGrow: 1,
        flexShrink: 1,
        margin: 0,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
        borderColor: Colors.BLACK,
        borderWidth: 1,
        color: Colors.BLACK
    },
    itemSeparator: {
        height: 1,
        backgroundColor: Colors.BLACK,
    },
    flatListContentContainer: {
        flexGrow: 1,
        fontSize: 18,
    },
    customItemContainer: {

    },
    customItemLabel: {
        fontStyle: 'italic'
    },
    listMessageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    listMessageText: {

    },
    selectedItemContainer: {

    },
    selectedItemLabel: {

    },
    modalTitle: {
        fontSize: 18,
        color: Colors.BLACK
    },
    extendableBadgeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1
    },
    extendableBadgeItemContainer: {
        marginVertical: 3,
        marginEnd: 7
    }
});