import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context)

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  )

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons style={styles.headerEdit} name="pencil" size={35} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  headerEdit: { marginRight: 8 }
})

export default ShowScreen
