import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import CategoryScreen from './CategoryScreen';



const Categories  = ({ navigation: { navigate } }) =>  {    
    const [isLoading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);    
    getCategories = () => {
        fetch('http://194.36.191.166/api/v1/tourtypes/')
          .then((response) => response.json())
          .then((json) => setCategories(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }    
    useEffect(() => {
        setLoading(true);
        getCategories();
    }, []);    
    return(
        <View style={styles.container}  >
            {isLoading ? 
            <Text>Загрузка...</Text> :
            (
                <View >
      <FlatList 
        data={categories}
        style={styles.catItems}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => navigate('CategoryScreen', { id: item.id, name: item.name})}> 
            <Text style={styles.LinkText}>{`${item.name}`}
            </Text>

          </TouchableOpacity>
        )}
      />
    </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
  LinkText: {
    fontSize: 22,
    paddingTop: '5%',
    paddingBottom: '5%',
    fontWeight: 'bold',
    color: '#001B36',
    lineHeight: 22,
    left: 45,
    right: 0,
    width: 350,
  },
  catItems: {
    marginTop: '15%'
  },
  container: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    paddingTop: 10
  },
  
});

export default Categories;