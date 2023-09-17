# faq-app

faq app with mongodb vector seach using nextjs 13,tailwind,typescript and redux for frontend

## https://www.mongodb.com/library/vector-search/semantic-search-mongodb-using-atlas-vector-search

indexing is based on

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
