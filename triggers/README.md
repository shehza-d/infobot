# Triggers for MongoDB Vector Search

## [Article](https://www.mongodb.com/library/vector-search/semantic-search-mongodb-using-atlas-vector-search)

Indexing is based on

```json
{
  "mappings": {
    "dynamic": true,
    "fields": {
      "faq_embedding": {
        "dimensions": 1536,
        "similarity": "cosine",
        "type": "knnVector"
      }
    }
  }
}
```
