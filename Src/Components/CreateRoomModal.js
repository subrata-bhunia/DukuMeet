import React, { useState } from 'react';
import {
    Modal, TouchableOpacity
} from 'react-native';
import { Text } from 'react-native-elements';


const CreateRoomModal=({visible})=>{
    var [visibleR,setVisibleR]=useState(visible);
    return(
        <Modal
        visible={visibleR}
        onDismiss={()=>setVisibleR(!visibleR)}
        on
        >
            <Text>
                Test Modal Create Room.
            </Text>
            <TouchableOpacity onPress={()=>setVisibleR(false)}>
                <Text>
                    Close
                </Text>
            </TouchableOpacity>
        </Modal>
    )
}

export default CreateRoomModal;