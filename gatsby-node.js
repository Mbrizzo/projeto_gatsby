const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

// Adiciona o campo slug para cada postagem
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Garante que estamos processando apenas markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` transforma arquivos de marcação `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

// To create the posts pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // os dados passados para o contexto estão disponíveis.
          // em consultas de página como variáveis ​​GraphQL.
          slug: node.fields.slug,
        },
      })
    })
  })
}
