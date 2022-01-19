
import {StyleSheet} from 'react-native'

const homeStyles=StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    createEventheader:{
        paddingTop: 40,
        alignSelf: 'stretch',
        paddingBottom:10,
        borderBottomColor:'#f5f5f5',
        borderBottomWidth:1,
    },
    goBack:{
        marginLeft:20,
        width:15,
        height:15,
    },
    addbannercoverimgContainer: {
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        marginLeft:20,
        marginRight:20,
    },
    addbannerimg:{
        color: '#000', 
        fontSize: 20,
        alignItems:'center',
        position:'absolute',
    },
    addbannercoverimg: {
        marginBottom:10,
        width: 368,
        height:150,
        justifyContent:'center',
        backgroundColor: 'rgba(221, 221, 221, 0.5)',
        borderRadius: 10,
    },
    createeventcontainer:{
        margin:20,
    },
    eventCreatetxt:{
        fontFamily:'RetHatDisplay-Medium',
        fontSize:30,
    },
    CreateEventNamecontainer:{
        marginLeft: 20,
        marginRight: 20,
        flexDirection:'row',
        backgroundColor: 'rgba(221, 221, 221, 0.5)',
        borderRadius:10,
        marginBottom:15,
    },
    CreateEventNameIcon:{
        color:'#000',
        opacity: .5,
        marginLeft:10,
        marginTop:10
},
    CreateEventNameField:{
        fontSize:16,
        fontFamily:'RetHatDisplay-Regular',
        marginLeft: 10,
        marginRight: 20,
        flexDirection:'row',
        marginTop:-3,
        padding:10,
    },
    CreateEventSchedcontainer:{
        marginLeft: 20,
        marginRight: 20,
        flexDirection:'row',
        backgroundColor: 'rgba(221, 221, 221, 0.5)',
        borderRadius:10,
        marginBottom:15,
    },
    CreateEventSchedIcon:{
        color:'#000',
        opacity: .5,
        marginLeft:10,
        marginTop:10,
    },
    CreateEventSchedField:{
        fontSize:16,
        fontFamily:'RetHatDisplay-Regular',
        marginLeft: 12,
        marginRight: 20,
        flexDirection:'row',
        marginTop:-3,
        padding:10,
    },
    CreateEventLoccontainer:{
        marginLeft: 20,
        marginRight: 20,
        flexDirection:'row',
        backgroundColor: 'rgba(221, 221, 221, 0.5)',
        borderRadius:10,
        marginBottom:15,
    },
    CreateEventLocIcon:{
        color:'#000',
        opacity: .5,
        marginLeft:10,
        marginTop:10
    },
    CreateEventLocField:{
        fontSize:16,
        fontFamily:'RetHatDisplay-Regular',
        marginLeft: 10,
        marginRight: 20,
        flexDirection:'row',
        marginTop:-3,
        padding:10,
    },
    CreateEventDesccontainer:{
        marginLeft: 20,
        marginRight: 20,
        flexDirection:'row',
        backgroundColor: 'rgba(221, 221, 221, 0.5)',
        borderRadius:10,
        marginBottom:15,
    },
    CreateEventDescIcon:{
        color:'#000',
        opacity: .5,
        marginLeft:10,
        marginTop:10
    },
    CreateEventDescField:{
        fontSize:16,
        fontFamily:'RetHatDisplay-Regular',
        marginLeft: 10,
        marginRight: 20,
        flexDirection:'row',
        marginTop:-3,
        padding:10,
    },
    CreateEventInfocontainer:{
        marginLeft: 20,
        marginRight: 20,
        flexDirection:'row',
        backgroundColor: 'rgba(221, 221, 221, 0.5)',
        borderRadius:10,
        marginBottom:15,
    },
    CreateEventInfoIcon:{
        color:'#000',
        opacity: .5,
        marginLeft:10,
        marginTop:10
    },
    CreateEventInfoField:{
        fontSize:16,
        fontFamily:'RetHatDisplay-Regular',
        marginLeft: 10,
        marginRight: 20,
        flexDirection:'row',
        marginTop:-3,
        padding:10,
    },
    createeventbtn: {
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#eb9834',
        height: 46,
        padding: 10,
        marginLeft:20,
        marginRight:20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 25,
        color: '#fff',
    },
    createeventtxt:{
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontFamily: 'RetHatDisplay-Medium',
    },
    
})

export default homeStyles;