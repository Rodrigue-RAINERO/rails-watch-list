class ListsController < ApplicationController
  def  index
    @lists = List.all
  end

  def show
    @list = List.find(params[:id])
    @bookmarks = @list.bookmarks
  end

  def new
    @list = List.new
  end

  def create
    @list = List.new(list_params)
    if @list.save
      redirect_to list_path(@list)
    else
      render :new
    end
  end

  # def edit
  #   @list = List.find(params[:id])
  # end

  def destroy
    @list = List.find(params[:id])
    @list.destroy

    respond_to do |format|
      format.html { redirect_to lists_path }
      format.turbo_stream { render turbo_stream: turbo_stream.replace('list_' + @list.id.to_s, partial: 'lists/list', locals: { list: @list }) }
    end
  end

  private

  def list_params
    params.require(:list).permit(:name, :photo)
  end
end
