import React, { useState, useContext } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const BlogPostForm = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Save Blog Post" />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 16,
    padding: 4,
    margin: 4
  },
  label: {
    fontSize: 20,
    marginBottom: 4,
    marginLeft: 4
  }
})

export default BlogPostForm
