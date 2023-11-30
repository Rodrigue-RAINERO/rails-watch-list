class CreateBookmarks < ActiveRecord::Migration[7.1]
  def change
    create_table :bookmarks do |t|
      t.text :comment
      t.references :movie, null: false, foreign_key: true
      t.references :list, foreign_key: { to_table: :lists, on_delete: :cascade }

      t.timestamps
    end
  end
end
