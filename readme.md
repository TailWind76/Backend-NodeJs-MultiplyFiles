

# Multiple File Uploads

### Route

```
POST /upload-multiple
```

### Request

- The files should be sent as a binary payload with the key 'files'.
- Up to 5 files can be uploaded simultaneously.

### Response

```json
{
  "message": "Files uploaded successfully",
  "filenames": ["file1.ext", "file2.ext"]
}
```

## License

This project is licensed under the [MIT License](LICENSE).

---

Make sure to replace `<repository_url>` with the actual URL of your repository.

Feel free to modify and expand on the code and README as needed to suit your project's requirements. This README.md file provides instructions on how to use the File Upload Server template, along with customization details and information about contributing and the project's license.